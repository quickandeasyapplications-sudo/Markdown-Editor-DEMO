# QET Markdown Editor - Quick Start Guide

Get your demo live on GitHub Pages in 5 minutes!

## Prerequisites

- GitHub account
- Git installed ([Download](https://git-scm.com/downloads))

## 5-Minute Deployment

### 1. Open Terminal

**Windows**: Press `Win+R`, type `cmd`, press Enter  
**Mac**: Press `Cmd+Space`, type "Terminal", press Enter  
**Linux**: Press `Ctrl+Alt+T`

### 2. Navigate to Demo Folder

```bash
cd path/to/qet-demo
```

### 3. Initialize Git

```bash
git init
git add .
git commit -m "Initial commit: QET Markdown Editor"
```

### 4. Create GitHub Repository

1. Go to [github.com](https://github.com)
2. Click **"+"** → **"New repository"**
3. Name: `qet-markdown-editor`
4. Visibility: **Public**
5. **Do NOT** initialize with README
6. Click **"Create repository"**

### 5. Push to GitHub

```bash
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/qet-markdown-editor.git
git branch -M main
git push -u origin main
```

**Note**: Use your GitHub personal access token as password, not your account password.

### 6. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** → **"Pages"**
3. Under "Source":
   - Branch: **main**
   - Folder: **/ (root)**
4. Click **"Save"**

### 7. Access Your Site

Wait 1-2 minutes, then visit:
```
https://YOUR_USERNAME.github.io/qet-markdown-editor/
```

## Done! 🎉

Your QET Markdown Editor is now live!

## Test Features

- ✅ Type markdown in editor
- ✅ See live preview
- ✅ Export to PDF, DOCX, HTML
- ✅ Save/Load documents
- ✅ Use formatting buttons

## Need Help?

See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for detailed instructions and troubleshooting.

## Next Steps

1. **Customize**: Update colors in `css/styles.css`
2. **Brand**: Replace logo in `assets/`
3. **Share**: Share your demo URL!

---

**Quick and Easy Tech** | [quickeasytech.com](https://quickeasytech.com)

