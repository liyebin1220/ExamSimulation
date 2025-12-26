# SAP BW/4HANA 2025 Exam Simulation Tool - Deployment Guide

This guide will walk you through the detailed steps to deploy the SAP Exam Simulation Tool to GitHub and set up GitHub Pages.

## Prerequisites

- Git must be installed on your computer
- You must have a GitHub account
- You must have permission to push to the repository https://github.com/liyebin1220/ExamSimulation.git

## Step 1: Verify Git Installation

Open PowerShell or Command Prompt and run:

```bash
git --version
```

If Git is installed, you'll see something like: `git version 2.52.0.windows.1`

If Git is not installed, download it from https://git-scm.com/download/win and install it with the default options.

## Step 2: Open the Project Directory

Navigate to the project folder:

```bash
cd E:\Testweb\SAPExamsTool\BW4H202505T
```

## Step 3: Verify Repository Setup

Check if Git is initialized:

```bash
git status
```

You should see: `On branch main` and `nothing to commit, working tree clean`

## Step 4: Push to GitHub

Run the push command:

```bash
git push origin main
```

### Authentication

When prompted for authentication, you'll need to enter your GitHub credentials:

- **Username**: Your GitHub username
- **Password**: Use a GitHub Personal Access Token (PAT) instead of your password
  - To create a PAT: Go to GitHub Settings → Developer settings → Personal access tokens → Generate new token
  - Select scopes: `repo` (full control of private repositories)
  - Copy the token and use it as your password

## Step 5: Set Up GitHub Pages

After pushing the code, set up GitHub Pages:

1. Go to your GitHub repository: https://github.com/liyebin1220/ExamSimulation
2. Click on "Settings" in the top menu
3. Scroll down to the "GitHub Pages" section
4. Under "Source", select "Branch: main", then click "Save"
5. Wait a few minutes for GitHub to deploy the site

## Step 6: Access the Deployed Site

Your site will be available at:
https://liyebin1220.github.io/ExamSimulation/

## Troubleshooting

### Git not recognized as a command

- If PowerShell doesn't recognize Git, open Git Bash instead (installed with Git)
- Or add Git to your PATH manually:
  ```bash
  $env:PATH += ';E:\Program Files\Git\bin'
  ```

### Push fails with network errors

- Check your internet connection
- Try again later if there are GitHub service issues
- Increase Git's post buffer size:
  ```bash
  git config --global http.postBuffer 524288000
  ```

### Authentication errors

- Make sure you're using a Personal Access Token instead of your password
- Ensure the PAT has the correct scopes (`repo`)
- Verify your GitHub username is correct

## Project Structure

After deployment, the repository contains:

- **index.html**: GitHub Pages landing page
- **index2.html**: Main exam tool
- **question-bank2.html**: Question bank editor
- **exam2.html**: Exam interface
- **vue.js**, **axios.js**, **i18n.js**: JavaScript dependencies
- **QB/**: Question bank files
- **.github/workflows/gh-pages.yml**: Automated deployment workflow

## What to Do After Deployment

1. Test the site at https://liyebin1220.github.io/ExamSimulation/
2. Share the link with users who need to access the SAP exam simulation tool
3. Update the question bank by modifying the files in the QB/ directory

## Support

If you encounter issues during deployment, please check the GitHub documentation or consult with a Git expert.