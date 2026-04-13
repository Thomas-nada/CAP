import os
import requests
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins=[
    'https://cap-portal.onrender.com',
    'http://localhost:8765',
    'http://localhost:8000',
])

CLIENT_ID     = os.environ.get('GITHUB_CLIENT_ID', '')
CLIENT_SECRET = os.environ.get('GITHUB_CLIENT_SECRET', '')


@app.route('/authenticate/<code>')
def authenticate(code):
    resp = requests.post(
        'https://github.com/login/oauth/access_token',
        json={'client_id': CLIENT_ID, 'client_secret': CLIENT_SECRET, 'code': code},
        headers={'Accept': 'application/json'},
        timeout=10
    )
    return jsonify(resp.json())


@app.route('/health')
def health():
    return jsonify({'status': 'ok'})


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
