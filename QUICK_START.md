# 🚀 Quick Start Guide

## Getting the App Running in 3 Steps

### Step 1: Extract the Files
Extract the `cap-portal.zip` file to a folder on your computer.

### Step 2: Start the Server

**Option A - Easy Way (Recommended):**

**Windows:**
- Double-click `start-server.bat`

**Mac/Linux:**
- Open Terminal in the project folder
- Run: `./start-server.sh`

**Option B - Manual:**
```bash
# If you have Python installed:
python -m http.server 8000

# OR if you have Node.js installed:
npx http-server -p 8000
```

### Step 3: Open in Browser
Open your browser and go to:
```
http://localhost:8000
```

Or to run diagnostics first:
```
http://localhost:8000/test.html
```

---

## ⚠️ Important Notes

### Don't Open index.html Directly!
❌ **This will NOT work:** Double-clicking index.html  
✅ **This WILL work:** Running a web server and accessing via http://localhost

### Why?
The app uses ES6 modules which require a web server. The `file://` protocol doesn't support module imports.

---

## 🔧 Troubleshooting

### "White page" or nothing loads?
1. Open browser console (press F12)
2. Check for red errors
3. Make sure you're using http://localhost:8000, not file://
4. Try opening `test.html` to diagnose the issue

### Server won't start?
1. Make sure port 8000 is not already in use
2. Try a different port: `python -m http.server 8080`
3. Install Python from python.org or Node.js from nodejs.org

### GitHub login doesn't work?
1. Update `js/config.js` with your GitHub repo details
2. Update Firebase configuration
3. Make sure you're accessing via http://, not file://

---

## 📁 Project Structure

```
cap-portal/
├── index.html           ← Main entry point
├── test.html            ← Diagnostic tool
├── start-server.sh      ← Mac/Linux startup script
├── start-server.bat     ← Windows startup script
├── CAP.png              ← Logo
├── styles.css           ← Styles
├── cardano-constitution.md  ← Fallback constitution
├── js/
│   ├── app.js           ← Main application
│   ├── api.js           ← GitHub API
│   ├── config.js        ← Configuration (EDIT THIS!)
│   └── components/      ← UI components
└── README.md            ← Full documentation
```

---

## ⚙️ Configuration

Before using the app with GitHub:

1. Open `js/config.js`
2. Update `REPO_OWNER` and `REPO_NAME` to your GitHub repository
3. Update Firebase configuration with your project details

Example:
```javascript
export const GITHUB_CONFIG = {
    REPO_OWNER: "your-username",
    REPO_NAME: "your-repo",
    API_BASE: "https://api.github.com"
};
```

---

## 🎯 Next Steps

1. **Run the diagnostic**: http://localhost:8000/test.html
2. **Launch the app**: http://localhost:8000
3. **Click "Authorize via GitHub"** to log in
4. **Explore the features**:
   - Amendment Wizard
   - Constitution Viewer
   - Proposal Registry
   - Learning Hub

---

## 📚 Need More Help?

- Check `README.md` for full documentation
- Run `test.html` for automated diagnostics
- Check browser console (F12) for error messages
- Ensure you have Python or Node.js installed

---

## ✅ Success Checklist

- [ ] Extracted zip file
- [ ] Started web server
- [ ] Opened http://localhost:8000 (not file://)
- [ ] No errors in browser console (F12)
- [ ] Updated js/config.js with your settings
- [ ] Able to see the landing page

If all boxes are checked, you're ready to go! 🎉
