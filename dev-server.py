"""
Combined dev server for CAP Portal + local repo preview.

Serves the portal from this directory on port 8765.
Reads .env from the project root and serves /js/env.js dynamically.
Requests to /local-repo/* are served from E:/CAP instead.

Usage: python dev-server.py
"""
import os
import sys
from http.server import HTTPServer, SimpleHTTPRequestHandler

PORTAL_DIR = os.path.dirname(os.path.abspath(__file__))
REPO_DIR = os.path.normpath("E:/CAP")
LOCAL_PREFIX = "/local-repo"

def load_env():
    env = {}
    env_path = os.path.join(PORTAL_DIR, ".env")
    if os.path.exists(env_path):
        with open(env_path) as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith("#") and "=" in line:
                    key, _, val = line.partition("=")
                    env[key.strip()] = val.strip()
    return env

class CombinedHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        super().end_headers()

    def do_GET(self):
        path = self.path.split("?")[0].split("#")[0]
        if path == "/js/env.js":
            env = load_env()
            token = env.get("GITHUB_TOKEN", "")
            body = f"export const GITHUB_TOKEN = {repr(token)};\n"
            body = body.encode()
            self.send_response(200)
            self.send_header("Content-Type", "application/javascript")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)
            return
        super().do_GET()

    def translate_path(self, path):
        if path.startswith(LOCAL_PREFIX):
            rel = path[len(LOCAL_PREFIX):]
            rel = rel.split("?")[0].split("#")[0]
            rel = rel.lstrip("/").replace("/", os.sep)
            return os.path.join(REPO_DIR, rel)
        os.chdir(PORTAL_DIR)
        return super().translate_path(path)

    def log_message(self, format, *args):
        pass  # Suppress noise

port = int(sys.argv[1]) if len(sys.argv) > 1 else 8765
os.chdir(PORTAL_DIR)
print(f"CAP Portal: http://localhost:{port}")
print(f"Local repo: http://localhost:{port}/local-repo -> {REPO_DIR}")
HTTPServer(("", port), CombinedHandler).serve_forever()
