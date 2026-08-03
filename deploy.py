import os
import re
import shutil
import subprocess
import sys
from datetime import datetime

USERNAME = os.environ.get("DEPLOY_GITHUB_USERNAME", "MYKHIL")
GIT_EMAIL = os.environ.get("DEPLOY_GIT_EMAIL", "darkmic50@gmail.com")
APP_ROOT = os.path.dirname(os.path.abspath(__file__))
APP_NAME = "BECE 2026 School Selection & Placement System"
DEFAULT_DESCRIPTION = os.environ.get("DEPLOY_REPO_DESCRIPTION", "BECE 2026 School Selection & Placement System")
DEFAULT_PRIVATE = True
DEFAULT_COMMIT_MESSAGE = "Deploy app"
GH_CMD = None


def require_app_files():
    required = ["package.json", "server.js", "index.html"]
    missing = [name for name in required if not os.path.exists(os.path.join(APP_ROOT, name))]
    if missing:
        raise FileNotFoundError(
            f"This deployment script is configured for {APP_NAME} and is missing: {', '.join(missing)}"
        )


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
    return os.path.isdir(os.path.join(cwd, ".git"))


def ensure_git_repo(cwd):
    if not is_git_repo(cwd):
        print("Initializing git repository...")
        if not run_command("git init", cwd=cwd):
            raise RuntimeError("Git initialization failed.")


def configure_git(cwd):
    run_command(f'git config user.name "{USERNAME}"', cwd=cwd)
    run_command(f'git config user.email "{GIT_EMAIL}"', cwd=cwd)


def current_branch(cwd):
    result = subprocess.run("git branch --show-current", shell=True, cwd=cwd, text=True, capture_output=True)
    branch = result.stdout.strip()
    return branch or "main"


def current_remote_url(cwd):
    result = subprocess.run(["git", "remote", "get-url", "origin"], cwd=cwd, text=True, capture_output=True)
    return result.stdout.strip() if result.returncode == 0 else ""


def infer_repo_name_from_remote(cwd, fallback_name):
    remote_url = current_remote_url(cwd)
    if not remote_url:
        return fallback_name
    match = re.search(r"github\.com/[^/]+/([^/.]+)", remote_url)
    if match:
        return sanitize_repo_name(match.group(1))
    return fallback_name


def ensure_origin_remote(cwd, repo_name):
    expected_url = f"https://github.com/{USERNAME}/{repo_name}.git"
    current_url = current_remote_url(cwd)
    if not current_url:
        print("Adding origin remote:", expected_url)
        return bool(run_command(f"git remote add origin {expected_url}", cwd=cwd))
    if current_url != expected_url:
        print("Updating origin remote to match expected GitHub URL:")
        print(" old:", current_url)
        print(" new:", expected_url)
        run_command(f"git remote set-url origin {expected_url}", cwd=cwd)
    return True


def gh_available():
    global GH_CMD
    gh_path = shutil.which("gh")
    if gh_path:
        GH_CMD = gh_path
        return True

    candidates = [
        r"C:\Program Files\GitHub CLI\gh.exe",
        r"C:\Program Files (x86)\GitHub CLI\gh.exe",
        os.path.expanduser(r"~\AppData\Local\Programs\GitHub CLI\gh.exe"),
    ]
    for candidate in candidates:
        if os.path.exists(candidate):
            GH_CMD = candidate
            return True
    return False


def gh_authenticate():
    print("Checking GitHub CLI authentication...")
    if not GH_CMD:
        return False
    status = run_command(f'"{GH_CMD}" auth status', check=False, capture_output=True)
    if status and getattr(status, "returncode", 1) == 0:
        return True

    print("GitHub CLI is not authenticated. Launching browser login...")
    login = run_command(f'"{GH_CMD}" auth login --web', check=False)
    if not login or getattr(login, "returncode", 1) != 0:
        return False

    status = run_command(f'"{GH_CMD}" auth status', check=False, capture_output=True)
    return status and getattr(status, "returncode", 1) == 0


def sanitize_repo_name(name):
    if not name:
        return ""
    clean = name.strip().replace(" ", "-")
    clean = re.sub(r"[^A-Za-z0-9_.-]+", "-", clean)
    clean = clean.strip("-")
    return clean or "repo"


def gh_repo_exists(repo_name):
    """Checks if the repository exists on GitHub and is accessible."""
    if not GH_CMD:
        return False
    cmd = f'"{GH_CMD}" repo view "{USERNAME}/{repo_name}"'
    result = run_command(cmd, cwd=APP_ROOT, check=False, capture_output=True)
    return result and getattr(result, "returncode", 1) == 0


def gh_create_repo(repo_name, description, private):
    visibility = "--private" if private else "--public"
    print(f"Creating GitHub repository {USERNAME}/{repo_name} using gh...")
    if not GH_CMD:
        return None
    quoted_name = f'"{repo_name}"'
    quoted_description = f'"{description or repo_name}"'
    
    # Using 'gh repo create' without --source/--remote since git origin may already be handled by script
    cmd = f'"{GH_CMD}" repo create {quoted_name} {visibility} --description {quoted_description}'
    return run_command(cmd, cwd=APP_ROOT, check=False)


def commit_changes(cwd, default_commit_message=None):
    run_command("git add .", cwd=cwd)
    status = subprocess.run("git status --porcelain", shell=True, cwd=cwd, text=True, capture_output=True)
    if status.stdout.strip():
        if default_commit_message is not None:
            message = default_commit_message
        else:
            message = input("Enter commit message [Deploy app]: ").strip() or "Deploy app"
        return bool(run_command(f'git commit -m "{message}"', cwd=cwd))
    print("No changes to commit.")
    return True


def push_current_branch(cwd, repo_name):
    branch = current_branch(cwd)
    if not ensure_origin_remote(cwd, repo_name):
        return False
    result = run_command(f"git push -u origin {branch}", cwd=cwd, check=False)
    return result and getattr(result, "returncode", 1) == 0


def main():
    print(f"\n=== Deploying {APP_NAME} ===")
    print(f"Workspace: {APP_ROOT}")
    print(f"GitHub username: {USERNAME}")

    require_app_files()

    cwd = APP_ROOT
    default_repo_name = sanitize_repo_name(os.path.basename(APP_ROOT))
    repo_name = default_repo_name
    description = DEFAULT_DESCRIPTION
    private = DEFAULT_PRIVATE
    commit_message = DEFAULT_COMMIT_MESSAGE

    use_defaults = input(
        "Use the app-specific deployment defaults?\n"
        f"  repo name = {repo_name}\n"
        f"  description = {description}\n"
        f"  private = {'yes' if private else 'no'}\n"
        f"  commit message = \"{commit_message}\"\n"
        "[Y/n]: "
    ).strip().lower()

    if use_defaults not in ("", "y", "yes"):
        raw_repo_name = input(f"Repository name [{repo_name}]: ").strip() or repo_name
        repo_name = sanitize_repo_name(raw_repo_name)
        description = input("Repository description (optional): ").strip() or description
        private = input("Private repository? (y/N): ").strip().lower() == "y"
        commit_message = None

    ensure_git_repo(cwd)
    repo_name = infer_repo_name_from_remote(cwd, repo_name)
    configure_git(cwd)
    if not commit_changes(cwd, default_commit_message=commit_message):
        print("Nothing to deploy. Exiting.")
        return

    if not gh_available():
        print("GitHub CLI (gh) is required for this script. Install it and rerun.")
        sys.exit(1)
    if not gh_authenticate():
        print("GitHub authentication failed. Please run 'gh auth login --web' and retry.")
        sys.exit(1)

    # --- AUTO-FIX LOGIC ---
    # Check if the repository actually exists on GitHub, regardless of local remote existence
    if not gh_repo_exists(repo_name):
        print(f"Repository '{USERNAME}/{repo_name}' was not found on GitHub. Creating it now...")
        result = gh_create_repo(repo_name, description, private)
        if not result or getattr(result, "returncode", 1) != 0:
            print("Failed to create the GitHub repository using gh.")
            sys.exit(1)
    else:
        print(f"Verified GitHub repository '{USERNAME}/{repo_name}' exists.")

    if not push_current_branch(cwd, repo_name):
        print("Git push failed. Check remote configuration and try again.")
        sys.exit(1)

    print("\nDeployment complete.")
    print(f"Completed at {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\nCancelled by user.")
        sys.exit(1)