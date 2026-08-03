import os
import sys
import subprocess
import shutil
import re
from datetime import datetime

USERNAME = os.environ.get('DEPLOY_GITHUB_USERNAME', 'MYKHIL')
GIT_EMAIL = os.environ.get('DEPLOY_GIT_EMAIL', 'darkmic50@gmail.com')
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
WEB_PRO_PATH = BASE_DIR
GH_CMD = None


def load_dotenv():
    env_path = os.path.join(WEB_PRO_PATH, '.env')
    if not os.path.exists(env_path):
        return
    try:
        with open(env_path, 'r', encoding='utf-8') as f:
            for line in f:
                trimmed = line.strip()
                if not trimmed or trimmed.startswith('#') or '=' not in trimmed:
                    continue
                key, value = line.split('=', 1)
                key = key.strip()
                value = value.strip()
                if key and key not in os.environ:
                    os.environ[key] = value
    except Exception:
        pass


def run_command(command, cwd=None, check=True, capture_output=False):
    try:
        return subprocess.run(
            command,
            shell=True,
            cwd=cwd,
            text=True,
            check=check,
            capture_output=capture_output,
        )
    except subprocess.CalledProcessError as exc:
        if capture_output:
            return exc
        return None


def is_git_repo(cwd):
    return os.path.isdir(os.path.join(cwd, '.git'))


def ensure_git_repo(cwd):
    if not is_git_repo(cwd):
        print('Initializing git repository...')
        if not run_command('git init', cwd=cwd):
            raise RuntimeError('Git initialization failed.')


def configure_git(cwd):
    run_command(f'git config user.name "{USERNAME}"', cwd=cwd)
    run_command(f'git config user.email "{GIT_EMAIL}"', cwd=cwd)


def current_branch(cwd):
    result = subprocess.run('git branch --show-current', shell=True, cwd=cwd, text=True, capture_output=True)
    branch = result.stdout.strip()
    return branch or 'main'


def current_remote_url(cwd):
    result = subprocess.run(
        ['git', 'remote', 'get-url', 'origin'],
        cwd=cwd,
        text=True,
        capture_output=True,
    )
    return result.stdout.strip() if result.returncode == 0 else ''


def ensure_origin_remote(cwd, repo_name):
    expected_url = f'https://github.com/{USERNAME}/{repo_name}.git'
    current_url = current_remote_url(cwd)
    if not current_url:
        print('Adding origin remote:', expected_url)
        return bool(run_command(f'git remote add origin {expected_url}', cwd=cwd))
    if current_url != expected_url:
        print('Existing origin remote does not match expected GitHub URL.')
        print(' current:', current_url)
        print(' expected:', expected_url)
        if input('Update origin to expected URL? (y/N): ').strip().lower() == 'y':
            return bool(run_command(f'git remote set-url origin {expected_url}', cwd=cwd))
        return False
    return True


def gh_available():
    global GH_CMD
    gh_path = shutil.which('gh')
    if gh_path:
        GH_CMD = gh_path
        return True

    candidates = [
        r'C:\Program Files\GitHub CLI\gh.exe',
        r'C:\Program Files (x86)\GitHub CLI\gh.exe',
        os.path.expanduser(r'~\AppData\Local\Programs\GitHub CLI\gh.exe'),
    ]
    for candidate in candidates:
        if os.path.exists(candidate):
            GH_CMD = candidate
            return True
    return False


def gh_authenticate():
    print('Checking GitHub CLI authentication...')
    if not GH_CMD:
        return False
    status = run_command(f'"{GH_CMD}" auth status', check=False, capture_output=True)
    if status and getattr(status, 'returncode', 1) == 0:
        return True
    print('GitHub CLI is not authenticated. Launching browser login...')
    login = run_command(f'"{GH_CMD}" auth login --web', check=False)
    if not login or getattr(login, 'returncode', 1) != 0:
        return False
    status = run_command(f'"{GH_CMD}" auth status', check=False, capture_output=True)
    return status and getattr(status, 'returncode', 1) == 0


def sanitize_repo_name(name):
    if not name:
        return ''
    clean = name.strip().replace(' ', '-')
    clean = re.sub(r'[^A-Za-z0-9_.-]+', '-', clean)
    clean = clean.strip('-')
    return clean or 'repo'


def gh_create_repo(repo_name, description, private):
    visibility = '--private' if private else '--public'
    print(f'Creating GitHub repository {repo_name} using gh...')
    if not GH_CMD:
        return None
    quoted_name = f'"{repo_name}"'
    quoted_description = f'"{description or repo_name}"'
    cmd = f'"{GH_CMD}" repo create {quoted_name} {visibility} --description {quoted_description} --source . --remote origin --push'
    return run_command(cmd, cwd=WEB_PRO_PATH, check=False)


def commit_changes(cwd, default_commit_message=None):
    run_command('git add .', cwd=cwd)
    status = subprocess.run('git status --porcelain', shell=True, cwd=cwd, text=True, capture_output=True)
    if status.stdout.strip():
        if default_commit_message is not None:
            message = default_commit_message
        else:
            message = input('Enter commit message [Deploy app]: ').strip() or 'Deploy app'
        return bool(run_command(f'git commit -m "{message}"', cwd=cwd))
    print('No changes to commit.')
    return True


def push_current_branch(cwd, repo_name):
    branch = current_branch(cwd)
    if not ensure_origin_remote(cwd, repo_name):
        return False
    result = run_command(f'git push -u origin {branch}', cwd=cwd, check=False)
    return result and getattr(result, 'returncode', 1) == 0


def get_all_firebase_projects(env_path):
    if not os.path.exists(env_path):
        return {}
    projects = {}
    try:
        with open(env_path, 'r', encoding='utf-8') as f:
            current_comment = ''
            for line in f:
                stripped = line.strip()
                if not stripped:
                    continue
                if stripped.startswith('#'):
                    current_comment = stripped.lstrip('#').strip()
                    continue
                match = re.match(r'FIREBASE_(\d+)_PROJECT_ID\s*=\s*(.+)', stripped)
                if match:
                    idx = int(match.group(1))
                    projects[idx] = {'pid': match.group(2).strip(), 'hint': current_comment}
                    current_comment = ''
    except Exception:
        pass
    return projects


def bootstrap_firebase_tokens(projects):
    if not projects:
        print('No Firebase projects found in .env.')
        return
    env_path = os.path.join(WEB_PRO_PATH, '.env')
    print('Bootstrapping Firebase CI token values in .env')
    lines = []
    if os.path.exists(env_path):
        with open(env_path, 'r', encoding='utf-8') as f:
            lines = f.readlines()
    for idx, item in sorted(projects.items()):
        key = f'FIREBASE_{idx}_TOKEN'
        token = input(f'Enter value for {key} (or leave blank to skip): ').strip()
        if not token:
            continue
        updated = False
        new_lines = []
        for line in lines:
            if line.startswith(key + '='):
                new_lines.append(f'{key}={token}\n')
                updated = True
            else:
                new_lines.append(line)
        if not updated:
            new_lines.append(f'{key}={token}\n')
        lines = new_lines
        os.environ[key] = token
    with open(env_path, 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print('Firebase token bootstrap complete.')


def main():
    print('\n=== School Selection App Deployment ===')
    print(f'Workspace: {WEB_PRO_PATH}')
    print(f'GitHub username: {USERNAME}')

    load_dotenv()
    cwd = WEB_PRO_PATH
    default_repo_name = os.path.basename(cwd)
    default_description = ''
    default_private = True
    default_commit_message = 'Deploy app'

    use_defaults = input(
        f'Use default GitHub deployment settings?\n'
        f'  repo name = {default_repo_name}\n'
        f'  description = (empty)\n'
        f'  private = yes\n'
        f'  commit message = "{default_commit_message}"\n'
        f'[Y/n]: '
    ).strip().lower()

    if use_defaults in ('', 'y', 'yes'):
        repo_name = sanitize_repo_name(default_repo_name)
        description = default_description
        private = default_private
        commit_message = default_commit_message
    else:
        raw_repo_name = input(f'Repository name [{default_repo_name}]: ').strip() or default_repo_name
        repo_name = sanitize_repo_name(raw_repo_name)
        description = input('Repository description (optional): ').strip()
        private = input('Private repository? (y/N): ').strip().lower() == 'y'
        commit_message = None

    ensure_git_repo(cwd)
    configure_git(cwd)
    if not commit_changes(cwd, default_commit_message=commit_message):
        print('Nothing to deploy. Exiting.')
        return

    if not gh_available():
        print('GitHub CLI (gh) is required for this script. Install it and rerun.')
        sys.exit(1)
    if not gh_authenticate():
        print('GitHub authentication failed. Please run "gh auth login --web" and retry.')
        sys.exit(1)

    if not current_remote_url(cwd):
        result = gh_create_repo(repo_name, description, private)
        if not result or getattr(result, 'returncode', 1) != 0:
            print('Failed to create GitHub repository via gh.')
            sys.exit(1)
    else:
        print('Remote already exists; skipping repository creation.')

    if not push_current_branch(cwd, repo_name):
        print('Git push failed. Check remote configuration and try again.')
        sys.exit(1)

    env_path = os.path.join(cwd, '.env')
    projects = get_all_firebase_projects(env_path)
    if projects and input('Detected Firebase projects in .env. Bootstrap tokens now? (y/N): ').strip().lower() == 'y':
        bootstrap_firebase_tokens(projects)

    print('\nDeployment complete.')
    print(f'Completed at {datetime.now().strftime("%Y-%m-%d %H:%M:%S")}')


if __name__ == '__main__':
    try:
        main()
    except KeyboardInterrupt:
        print('\nCancelled by user.')
        sys.exit(1)
