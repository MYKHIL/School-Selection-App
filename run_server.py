#!/usr/bin/env python3
"""
run_server.py

Start a local dev server for the project. If `livereload` is installed the server
will auto-reload when HTML/CSS/JS changes are detected. Otherwise the script
falls back to a simple static HTTP server.

Usage:
  python run_server.py
  python run_server.py --port 8000
"""
import os
import argparse
import importlib
import webbrowser
import time


def simple_http_server(port):
    print(f"livereload not installed. Starting simple HTTP server on http://localhost:{port}")
    try:
        # Prefer ThreadingHTTPServer when available for better responsiveness
        from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
        os.chdir(os.path.dirname(os.path.abspath(__file__)) or '.')

        max_tries = 10
        for attempt in range(max_tries):
            try_port = port + attempt
            try:
                server = ThreadingHTTPServer(("0.0.0.0", try_port), SimpleHTTPRequestHandler)
                url = f"http://localhost:{try_port}/"
                print(f"Serving HTTP on 0.0.0.0 port {try_port} ({url}) ...")
                # Open default browser to the served URL shortly after bind
                try:
                    # slight delay to ensure the OS has finished binding
                    time.sleep(0.1)
                    webbrowser.open(url, new=2)
                except Exception:
                    pass
                server.serve_forever()
                break
            except OSError as e:
                print(f"Port {try_port} unavailable: {e}")
                if attempt == max_tries - 1:
                    raise
                print(f"Trying next port {try_port + 1}...")
    except KeyboardInterrupt:
        print("Server stopped by user")


def livereload_server(port):
    try:
        livereload_module = importlib.import_module('livereload')
        Server = livereload_module.Server
    except ImportError as exc:
        raise RuntimeError('livereload is not installed') from exc

    os.chdir(os.path.dirname(os.path.abspath(__file__)) or '.')
    server = Server()
    server.watch('*.html')
    server.watch('*.css')
    server.watch('*.js')
    server.watch('*.json')
    server.watch('scripts')
    server.watch('data')
    url = f"http://localhost:{port}/"
    print(f"Starting livereload server at {url} (live-reload enabled)")
    try:
        # open browser before handing control to the livereload server
        webbrowser.open(url, new=2)
    except Exception:
        pass
    server.serve(port=port, host='0.0.0.0', root='.')


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--port', '-p', type=int, default=5500)
    args = parser.parse_args()
    port = args.port

    try:
        livereload_server(port)
    except Exception:
        print("\nTo enable live-reload install: pip install livereload\n")
        simple_http_server(port)


if __name__ == '__main__':
    main()
