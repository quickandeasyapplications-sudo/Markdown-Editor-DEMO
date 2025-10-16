# QET Markdown Editor - Complete Deployment Guide

This guide provides detailed, step-by-step instructions for deploying the QET Markdown Editor demo to GitHub Pages.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Quick Start (5 Minutes)](#quick-start)
3. [Detailed Deployment Steps](#detailed-deployment-steps)
4. [Post-Deployment Verification](#post-deployment-verification)
5. [Troubleshooting](#troubleshooting)
6. [Advanced Configuration](#advanced-configuration)

---

## Prerequisites

Before you begin, ensure you have:

- ✅ A GitHub account ([Sign up here](https://github.com/join))
- ✅ Git installed on your computer ([Download here](https://git-scm.com/downloads))
- ✅ A text editor (VS Code, Sublime Text, or any editor)
- ✅ Basic command line knowledge
- ✅ The QET demo files (this directory)

### Verify Git Installation

Open your terminal/command prompt and run:

```bash
git --version
```

You should see something like: `git version 2.x.x`

---

## Quick Start (5 Minutes)

For experienced users, here's the fastest way to deploy:

```bash
# 1. Navigate to the demo directory
cd qet-demo

# 2. Initialize git (if not already done)
git init

# 3. Add all files
git add .

# 4. Commit
git commit -m "Initial commit: QET Markdown Editor"

# 5. Create repo on GitHub (via web interface)
# Then connect and push:
git remote add origin https://github.com/YOUR_USERNAME/qet-markdown-editor.git
git branch -M main
git push -u origin main

# 6. Enable GitHub Pages in repository settings
# Settings > Pages > Source: main branch, root folder > Save
```

Your site will be live at: `https://YOUR_USERNAME.github.io/qet-markdown-editor/`

---

## Detailed Deployment Steps

### Step 1: Prepare Your Local Environment

#### 1.1 Open Terminal/Command Prompt

**Windows:**
- Press `Win + R`, type `cmd`, press Enter
- Or search for "Command Prompt" in Start menu

**Mac:**
- Press `Cmd + Space`, type "Terminal", press Enter
- Or find Terminal in Applications > Utilities

**Linux:**
- Press `Ctrl + Alt + T`
- Or search for "Terminal" in applications

#### 1.2 Navigate to the Demo Directory

```bash
# List current directory contents
ls  # Mac/Linux
dir # Windows

# Change to the qet-demo directory
cd path/to/qet-demo

# Example:
cd /Users/yourname/Downloads/qet-demo  # Mac
cd C:\Users\yourname\Downloads\qet-demo  # Windows
```

#### 1.3 Verify Files

```bash
# List files to ensure you're in the right directory
ls -la  # Mac/Linux
dir     # Windows

# You should see:
# - index.html
# - css/
# - js/
# - assets/
# - README.md
```

---

### Step 2: Initialize Git Repository

#### 2.1 Initialize Git

```bash
git init
```

**Expected output:**
```
Initialized empty Git repository in /path/to/qet-demo/.git/
```

#### 2.2 Configure Git (First Time Only)

If you haven't used Git before, set your identity:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

#### 2.3 Add Files to Git

```bash
# Add all files
git add .

# Verify files were added
git status
```

**Expected output:**
```
On branch main

Initial commit

Changes to be committed:
  new file:   .gitignore
  new file:   LICENSE
  new file:   README.md
  new file:   index.html
  ...
```

#### 2.4 Create Initial Commit

```bash
git commit -m "Initial commit: QET Markdown Editor demo with full export functionality"
```

**Expected output:**
```
[main (root-commit) abc1234] Initial commit: QET Markdown Editor demo...
 XX files changed, XXXX insertions(+)
 create mode 100644 index.html
 ...
```

---

### Step 3: Create GitHub Repository

#### 3.1 Log in to GitHub

1. Go to [github.com](https://github.com)
2. Sign in with your credentials

#### 3.2 Create New Repository

1. Click the **"+"** icon in the top-right corner
2. Select **"New repository"**

#### 3.3 Configure Repository Settings

Fill in the following:

- **Repository name**: `qet-markdown-editor` (or your preferred name)
- **Description**: `Offline-First Markdown Editor with Zero-Knowledge Encryption - Web Demo`
- **Visibility**: Choose **Public** (required for free GitHub Pages)
- **Initialize repository**: 
  - ❌ **Do NOT** check "Add a README file"
  - ❌ **Do NOT** add .gitignore
  - ❌ **Do NOT** choose a license
  
  (We already have these files locally)

#### 3.4 Create Repository

Click **"Create repository"** button

---

### Step 4: Connect Local Repository to GitHub

After creating the repository, GitHub will show you setup instructions. Follow these:

#### 4.1 Add Remote Repository

```bash
# Replace YOUR_USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR_USERNAME/qet-markdown-editor.git
```

**Example:**
```bash
git remote add origin https://github.com/johndoe/qet-markdown-editor.git
```

#### 4.2 Verify Remote

```bash
git remote -v
```

**Expected output:**
```
origin  https://github.com/YOUR_USERNAME/qet-markdown-editor.git (fetch)
origin  https://github.com/YOUR_USERNAME/qet-markdown-editor.git (push)
```

#### 4.3 Rename Branch to Main

```bash
git branch -M main
```

#### 4.4 Push to GitHub

```bash
git push -u origin main
```

**You may be prompted for credentials:**
- **Username**: Your GitHub username
- **Password**: Your GitHub personal access token (not your account password)

**Note**: GitHub no longer accepts account passwords for Git operations. You need to create a personal access token:

1. Go to GitHub Settings > Developer settings > Personal access tokens > Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a name: "QET Demo Deployment"
4. Select scopes: `repo` (full control of private repositories)
5. Click "Generate token"
6. Copy the token and use it as your password

**Expected output:**
```
Enumerating objects: XX, done.
Counting objects: 100% (XX/XX), done.
Delta compression using up to X threads
Compressing objects: 100% (XX/XX), done.
Writing objects: 100% (XX/XX), XX.XX KiB | XX.XX MiB/s, done.
Total XX (delta X), reused 0 (delta 0), pack-reused 0
To https://github.com/YOUR_USERNAME/qet-markdown-editor.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

---

### Step 5: Enable GitHub Pages

#### 5.1 Navigate to Repository Settings

1. Go to your repository on GitHub: `https://github.com/YOUR_USERNAME/qet-markdown-editor`
2. Click **"Settings"** tab (top right, near the repository name)

#### 5.2 Access Pages Settings

1. In the left sidebar, scroll down to find **"Pages"**
2. Click on **"Pages"**

#### 5.3 Configure GitHub Pages

Under **"Build and deployment"** section:

1. **Source**: Select **"Deploy from a branch"**
2. **Branch**: 
   - Select **"main"** from the dropdown
   - Select **"/ (root)"** from the folder dropdown
3. Click **"Save"**

#### 5.4 Wait for Deployment

GitHub will display a message:
```
Your site is ready to be published at https://YOUR_USERNAME.github.io/qet-markdown-editor/
```

**Note**: It may take 1-3 minutes for the site to be fully deployed.

After deployment completes, the message will change to:
```
Your site is live at https://YOUR_USERNAME.github.io/qet-markdown-editor/
```

---

## Post-Deployment Verification

### Step 6: Test Your Deployed Site

#### 6.1 Visit Your Site

Open your browser and go to:
```
https://YOUR_USERNAME.github.io/qet-markdown-editor/
```

#### 6.2 Verify All Features

Test each feature to ensure everything works:

**✅ Visual Elements:**
- [ ] QET logo displays correctly
- [ ] Header shows proper branding
- [ ] Colors match QET brand (navy blue and teal)
- [ ] Layout is responsive

**✅ Editor Functionality:**
- [ ] Type markdown in the editor
- [ ] Real-time preview updates
- [ ] Syntax highlighting works for code blocks
- [ ] Formatting buttons work (Bold, Italic, Heading, etc.)

**✅ Storage Features:**
- [ ] Click "Save" - document saves to browser
- [ ] Refresh page
- [ ] Click "Load" - document loads from browser
- [ ] "New" button clears editor

**✅ Export Features:**
- [ ] Click "PDF" - downloads PDF file
- [ ] Click "DOCX" - downloads Word document
- [ ] Click "HTML" - downloads HTML file
- [ ] Open exported files to verify formatting

**✅ Modal:**
- [ ] Click "About" - modal opens
- [ ] Modal displays QET information
- [ ] Close button works
- [ ] Clicking outside modal closes it

**✅ Responsive Design:**
- [ ] Resize browser window
- [ ] Test on mobile device
- [ ] Layout adapts properly

---

## Troubleshooting

### Issue 1: "git: command not found"

**Problem**: Git is not installed or not in PATH

**Solution**:
1. Download Git from [git-scm.com](https://git-scm.com/downloads)
2. Install with default settings
3. Restart terminal/command prompt
4. Verify: `git --version`

---

### Issue 2: GitHub Pages Not Loading (404 Error)

**Problem**: Site shows 404 error after deployment

**Solutions**:

**A. Wait Longer**
- GitHub Pages can take up to 10 minutes to deploy
- Wait and refresh

**B. Check Repository Visibility**
- Go to repository Settings > General
- Ensure repository is **Public** (not Private)
- GitHub Pages is free only for public repositories

**C. Verify Branch and Folder**
- Go to Settings > Pages
- Ensure:
  - Branch: `main`
  - Folder: `/ (root)`
- Click Save again

**D. Check File Names**
- Ensure `index.html` is in the root directory
- File names are case-sensitive on GitHub

---

### Issue 3: Export Features Not Working

**Problem**: Export buttons don't generate files

**Solutions**:

**A. Check Browser Console**
1. Press F12 to open Developer Tools
2. Click "Console" tab
3. Look for error messages
4. Common issues:
   - Blocked by popup blocker
   - CORS errors (shouldn't happen with GitHub Pages)

**B. Try Different Browser**
- Test in Chrome, Firefox, or Edge
- Ensure browser is up to date

**C. Check Browser Permissions**
- Allow downloads from your site
- Disable popup blocker for your domain

---

### Issue 4: Authentication Failed When Pushing

**Problem**: `git push` fails with authentication error

**Solution**:

**Create Personal Access Token:**
1. Go to GitHub.com
2. Click your profile picture > Settings
3. Scroll down to "Developer settings"
4. Click "Personal access tokens" > "Tokens (classic)"
5. Click "Generate new token (classic)"
6. Name: "QET Demo Deployment"
7. Expiration: Choose duration
8. Select scopes: Check `repo`
9. Click "Generate token"
10. **Copy the token immediately** (you won't see it again)
11. Use this token as your password when pushing

**Alternative - Use SSH:**
```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your.email@example.com"

# Add to GitHub
# Copy public key
cat ~/.ssh/id_ed25519.pub

# Add to GitHub: Settings > SSH and GPG keys > New SSH key

# Change remote to SSH
git remote set-url origin git@github.com:YOUR_USERNAME/qet-markdown-editor.git
```

---

### Issue 5: Styles Not Loading

**Problem**: Site loads but has no styling

**Solutions**:

**A. Check File Paths**
- Ensure `css/styles.css` exists
- Verify path in `index.html`: `<link rel="stylesheet" href="css/styles.css">`

**B. Clear Browser Cache**
- Press Ctrl+Shift+R (Windows/Linux)
- Press Cmd+Shift+R (Mac)

**C. Check GitHub Pages URL**
- If repository name is different, update paths
- Use relative paths (already done in this demo)

---

## Advanced Configuration

### Custom Domain

#### Step 1: Purchase Domain
- Buy from GoDaddy, Namecheap, Google Domains, etc.

#### Step 2: Configure GitHub
1. Go to repository Settings > Pages
2. Under "Custom domain", enter: `www.yourdomain.com`
3. Click Save
4. Check "Enforce HTTPS" (after DNS propagates)

#### Step 3: Configure DNS
At your domain registrar, add these records:

**CNAME Record:**
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
TTL: 3600
```

**A Records (for apex domain):**
```
Type: A
Name: @
Value: 185.199.108.153
TTL: 3600

Type: A
Name: @
Value: 185.199.109.153
TTL: 3600

Type: A
Name: @
Value: 185.199.110.153
TTL: 3600

Type: A
Name: @
Value: 185.199.111.153
TTL: 3600
```

#### Step 4: Wait for Propagation
- DNS changes can take 24-48 hours
- Check status: `nslookup www.yourdomain.com`

---

### Enable HTTPS

GitHub Pages automatically provides HTTPS for `.github.io` domains.

For custom domains:
1. Wait for DNS to propagate
2. Go to Settings > Pages
3. Check "Enforce HTTPS"
4. Wait a few minutes for certificate generation

---

### Analytics Integration

Add Google Analytics or other tracking:

1. Get your tracking code
2. Add to `index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

3. Commit and push changes

---

### Continuous Deployment

Every time you push to the `main` branch, GitHub Pages automatically redeploys:

```bash
# Make changes to files
# Then:
git add .
git commit -m "Description of changes"
git push origin main

# Wait 1-2 minutes
# Changes will be live
```

---

## Maintenance

### Updating the Demo

```bash
# 1. Make changes to files locally

# 2. Test locally by opening index.html in browser

# 3. Commit changes
git add .
git commit -m "Update: description of changes"

# 4. Push to GitHub
git push origin main

# 5. Wait for deployment (1-2 minutes)
```

### Monitoring

- Check deployment status: Repository > Actions tab
- View traffic: Repository > Insights > Traffic
- Monitor issues: Repository > Issues tab

---

## Support

If you encounter issues not covered in this guide:

1. **Check GitHub Status**: [githubstatus.com](https://www.githubstatus.com/)
2. **GitHub Docs**: [docs.github.com/pages](https://docs.github.com/en/pages)
3. **Community**: [GitHub Community Forum](https://github.community/)
4. **Contact**: support@quickeasytech.com

---

## Checklist

Use this checklist to ensure successful deployment:

- [ ] Git installed and configured
- [ ] Files downloaded/extracted
- [ ] Git repository initialized
- [ ] Files committed locally
- [ ] GitHub repository created
- [ ] Remote repository added
- [ ] Code pushed to GitHub
- [ ] GitHub Pages enabled
- [ ] Site is live and accessible
- [ ] All features tested and working
- [ ] README updated with correct URLs
- [ ] Custom domain configured (optional)
- [ ] HTTPS enabled
- [ ] Analytics added (optional)

---

**Congratulations!** 🎉

Your QET Markdown Editor demo is now live on GitHub Pages!

Share your demo: `https://YOUR_USERNAME.github.io/qet-markdown-editor/`

---

*Last Updated: October 2025*  
*Quick and Easy Tech - Empowering Privacy-First Productivity*

