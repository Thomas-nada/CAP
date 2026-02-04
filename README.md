# Cardano Governance Portal (CAP Portal)

A modern, institutional-grade governance platform for managing Cardano Amendment Proposals (CAPs) and Constitutional Information Submissions (CIS).

## Features

- **Amendment Wizard**: Step-by-step guided process for creating CAPs
- **Constitution Viewer**: Browse and compare different versions of the constitution
- **Proposal Registry**: Search and filter all governance proposals
- **Learning Hub**: Educational resources for governance participation
- **GitHub Integration**: Direct synchronization with GitHub Issues
- **Dark Mode**: Full dark mode support

## Project Structure

```
cap-portal/
├── index.html              # Main HTML entry point
├── styles.css              # Global styles and custom CSS
├── CAP.png                 # Logo file
├── js/
│   ├── app.js              # Main application logic and state management
│   ├── api.js              # GitHub API integration functions
│   ├── config.js           # Configuration (GitHub repo, Firebase)
│   └── components/
│       ├── nav.js          # Navigation component
│       ├── landing.js      # Landing/login page
│       ├── dashboard.js    # Dashboard view
│       ├── registry.js     # Proposal registry with search
│       ├── wizard.js       # Amendment wizard
│       ├── constitution.js # Constitution viewer
│       ├── create.js       # Create proposal form
│       ├── edit.js         # Edit proposal form
│       ├── detail.js       # Proposal detail view
│       └── learn.js        # Learning hub
```

## Setup Instructions

### 1. Configuration

Edit `js/config.js` to set your GitHub repository and Firebase credentials:

```javascript
export const GITHUB_CONFIG = {
    REPO_OWNER: "your-github-username",
    REPO_NAME: "your-repo-name",
    API_BASE: "https://api.github.com"
};

export const FIREBASE_CONFIG = {
    apiKey: "your-api-key",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project-id",
    // ... other Firebase config
};
```

### 2. Local Development

Since this app uses ES6 modules, you need to serve it through a web server (not just opening index.html in a browser).

**Option 1: Python**
```bash
# Python 3
python -m http.server 8000

# Then open: http://localhost:8000
```

**Option 2: Node.js (npx)**
```bash
npx http-server -p 8000

# Then open: http://localhost:8000
```

**Option 3: VS Code Live Server**
- Install the "Live Server" extension
- Right-click index.html and select "Open with Live Server"

### 3. GitHub Authentication

The app requires GitHub OAuth authentication. Users will need to:
1. Click "Authorize via GitHub" on the landing page
2. Grant the necessary repository permissions
3. The app will store the access token locally

### 4. Repository Structure

Your GitHub repository should have:
- `constitution/` folder with constitution markdown files
- `constitution/CAP Constitutions/` folder for CAP preview versions (created automatically)
- Issues enabled for CAP/CIS proposals

## Technologies Used

- **Frontend**: Vanilla JavaScript (ES6 modules)
- **Styling**: Tailwind CSS
- **Markdown**: Marked.js
- **Icons**: Lucide Icons
- **Backend**: Firebase (authentication & logging)
- **Version Control**: GitHub API & Issues

## Key Components

### Amendment Wizard (`wizard.js`)
Guides users through creating a CAP with:
- Step 1: Basic information (title, category)
- Step 2: Text selection from constitution
- Step 3: Proposed revisions
- Step 4: Abstract and motivation
- Step 5: Review and submit

### Constitution Viewer (`constitution.js`)
- View multiple constitution versions
- Diff mode to compare versions
- Text selection for creating CAPs
- Support for CAP preview constitutions

### Registry (`registry.js`)
- Full-text search across proposals
- Filter by type (CAP/CIS) and status (open/closed)
- Responsive card-based layout

### Learning Hub (`learn.js`)
- Educational resources (framework ready)
- Links to external documentation
- FAQ section (to be filled)

## Browser Support

Modern browsers with ES6 module support:
- Chrome 61+
- Firefox 60+
- Safari 11+
- Edge 16+

## Troubleshooting

### White/Blank Page

If you see a white page or the app doesn't load:

1. **Check the browser console** (F12) for errors
2. **Verify you're using a web server** - ES6 modules don't work with `file://` protocol
3. **Run the diagnostic test**: Open `test.html` in your browser to check all files
4. **Clear browser cache** and reload
5. **Disable browser extensions** temporarily (especially wallet extensions)

### Common Issues

**"Failed to load module" errors:**
- Solution: Make sure you're running a web server, not opening index.html directly
- Use: `python -m http.server 8000` or similar

**404 errors for .js files:**
- Check that all files extracted correctly from the zip
- Verify the directory structure matches the Project Structure section above

**Constitution not loading:**
- The app will try to load from GitHub first
- Falls back to local `cardano-constitution.md` file
- Check `js/config.js` has correct GitHub repo settings

**GitHub authentication fails:**
- Verify your Firebase configuration in `js/config.js`
- Check that your GitHub OAuth app is set up correctly
- Make sure you're accessing via `http://` or `https://`, not `file://`

### CSP (Content Security Policy) Warnings

You may see CSP warnings in the console from browser extensions (Yoroi, Eternl, Nami, etc.). These are normal and don't affect the app's functionality. The warnings are from the extensions trying to inject scripts and can be safely ignored.

### Diagnostic Test

Open `test.html` in your browser to run automated diagnostics that will:
- Check if all JavaScript files are accessible
- Verify ES6 module support
- Test image and CSS loading
- Display server configuration info

## License

This project is licensed under CC-BY-4.0.

## Contributing

Contributions welcome! Please follow the existing code style and component structure.

## Support

For issues or questions, please open an issue on the GitHub repository.
