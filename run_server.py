#!/usr/bin/env python3
"""
Start the local development server for this app.

This project uses the Express server in server.js, so this wrapper launches
that server directly and keeps the behavior specific to this workspace.
"""
import os
import argparse
import shutil
import socket
import subprocess
import sys
import time
import webbrowser

APP_ROOT = os.path.dirname(os.path.abspath(__file__))
SERVER_FILE = os.path.join(APP_ROOT, "server.js")
PACKAGE_FILE = os.path.join(APP_ROOT, "package.json")


def ensure_app_files():
    missing = []
    if not os.path.exists(SERVER_FILE):
        missing.append("server.js")
    if not os.path.exists(PACKAGE_FILE):
        missing.append("package.json")
    if missing:
        raise FileNotFoundError(
            "This script is configured for the BECE school selector app and expects: "
            + ", ".join(missing)
        )


def get_available_port(start_port):
    port = start_port
    while True:
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
            sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
            try:
                sock.bind(("0.0.0.0", port))
                return port
            except OSError:
                port += 1


def run_node_server(port):
    ensure_app_files()

    if not shutil.which("node"):
        raise RuntimeError("Node.js is required to run this app. Install Node.js and try again.")

    actual_port = get_available_port(port)
    if actual_port != port:
        print(f"Port {port} is busy; using {actual_port} instead.")

    print(f"Starting the BECE 2026 School Selection app at http://localhost:{actual_port}")
    env = os.environ.copy()
    env["PORT"] = str(actual_port)

    process = subprocess.Popen(
        ["node", "server.js"],
        cwd=APP_ROOT,
        env=env,
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        text=True,
    )

    time.sleep(1.0)
    url = f"http://localhost:{actual_port}/"
    try:
        webbrowser.open(url, new=2)
    except Exception:
        pass
    print(f"Open this URL in your browser: {url}")

    try:
        for line in process.stdout:
            if line:
                print(line, end="")
    except KeyboardInterrupt:
        process.terminate()
        process.wait(timeout=5)
        print("\nServer stopped by user")


def main():
    parser = argparse.ArgumentParser(description="Run the BECE school selection app locally")
    parser.add_argument("--port", "-p", type=int, default=3000)
    args = parser.parse_args()

    try:
        run_node_server(args.port)
    except FileNotFoundError as exc:
        print(str(exc))
        sys.exit(1)
    except RuntimeError as exc:
        print(str(exc))
        sys.exit(1)


if __name__ == "__main__":
    main()
