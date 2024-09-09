# React + Google Apps Script Authentication App

This project is a simple authentication application where login is restricted to emails stored in a Google Sheet (Column C).

## Features
- Login is only allowed for emails listed in the Google Sheet.
- Uses Google Apps Script as the backend to handle authentication.
- React frontend for the login form.

## Getting Started

### Prerequisites
- A Google account to create and deploy Google Apps Script.
- A React development environment.

### Setting up the Google Sheet
1. Create a new Google Sheet.
2. Add a list of authorized emails in Email Column .
3. Note down the Spreadsheet ID.

### Deploy Google Apps Script
1. Go to `https://script.google.com/`.
2. Create a new project and paste the code from `apps_script_code.js` (located in this repo).
3. Deploy the script as a web app.
4. Copy the deployment URL.

### Running the React App
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/react-appscript-auth.git
