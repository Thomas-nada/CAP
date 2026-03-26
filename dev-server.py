"""
Combined dev server for CAP Portal + local repo preview.

Serves the portal from this directory on port 8765.
Requests to /local-repo/* are served from E:/CAP instead.

Usage: python dev-server.py
"""
import os
import sys
from http.server import HTTPServer, SimpleHTTPRequestHandler

PORTAL_DIR = os.path.dirname(os.path.abspath(__file__))
REPO_DIR = os.path.normpath("E:/CAP")
LOCAL_PREFIX = "/local-repo"

class CombinedHandler(SimpleHTTPRequestHandler):
    def translate_path(self, path):
        if path.startswith(LOCAL_PREFIX):
            # Strip the prefix and serve from the repo directory
            rel = path[len(LOCAL_PREFIX):]
            rel = rel.split("?")[0].split("#")[0]
            rel = rel.lstrip("/").replace("/", os.sep)
            return os.path.join(REPO_DIR, rel)
        # Default: serve from portal directory
        os.chdir(PORTAL_DIR)
        return super().translate_path(path)

    def log_message(self, format, *args):
        pass  # Suppress noise

port = int(sys.argv[1]) if len(sys.argv) > 1 else 8765
os.chdir(PORTAL_DIR)
print(f"CAP Portal: http://localhost:{port}")
print(f"Local repo: http://localhost:{port}/local-repo -> {REPO_DIR}")
HTTPServer(("", port), CombinedHandler).serve_forever()
