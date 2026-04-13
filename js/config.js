/**
 * Project Configuration
 * Stores repository details and third-party service credentials.
 */

// GitHub Repository Configuration
export const GITHUB_CONFIG = {
    REPO_OWNER: "Thomas-nada",
    REPO_NAME: "cap",
    API_BASE: "https://api.github.com"
};

// Set to a local server URL (e.g. "http://localhost:8766") to load
// constitution files from a local copy of the repo instead of GitHub.
// Set to null to use GitHub (production default).
export const LOCAL_CONSTITUTION_BASE = null;

// Application Constants
export const APP_ID = 'cap-portal-v1';

// Fallback editors list — used only if editors.json cannot be fetched from the repo.
export const EDITORS_FALLBACK = ['Thomas-nada'];