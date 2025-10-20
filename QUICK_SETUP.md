# Quick Setup Guide - Get Your Google Script URL

## Step 1: Create Google Sheet & Apps Script

1. **Go to Google Sheets**: https://sheets.google.com
2. **Create new spreadsheet** and name it "Contact Form Responses"
3. **Add headers** in row 1:
   - A1: `Timestamp`
   - B1: `Name` 
   - C1: `Email`
   - D1: `Phone`
   - E1: `Project Type`
   - F1: `Message`

4. **Open Apps Script**: Extensions → Apps Script
5. **Replace the default code** with this:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    if (!data.name || !data.email || !data.projectType || !data.message) {
      return ContentService
        .createTextOutput(JSON.stringify({success: false, error: 'Missing required fields'}))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    const rowData = [
      data.timestamp || new Date().toISOString(),
      data.name.trim(),
      data.email.trim(),
      data.phone || '',
      data.projectType,
      data.message.trim()
    ];
    
    sheet.appendRow(rowData);
    
    return ContentService
      .createTextOutput(JSON.stringify({success: true, message: 'Data added successfully'}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Step 2: Deploy as Web App

1. **Save the script**: Ctrl+S (or Cmd+S)
2. **Click Deploy** → **New deployment**
3. **Click the gear icon** → Select **Web app**
4. **Set these options**:
   - Description: "Contact Form Handler"
   - Execute as: "Me"
   - Who has access: **"Anyone"** ← This is important!
5. **Click Deploy**
6. **COPY THE WEB APP URL** that appears (it looks like: `https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec`)

## Step 3: Update Your Website

1. **Open** `.env` in your project
2. **Replace** `your_google_script_url_here` with your actual URL:

```
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_ACTUAL_SCRIPT_ID/exec
```

3. **Save the file**
4. **Restart your development server**: 
   ```bash
   npm run dev
   ```

## Step 4: Test

1. Go to your contact form
2. Fill it out and submit
3. Check your Google Sheet - the data should appear!

## Troubleshooting

- **Still getting the error?** Check the browser console for the "Script URL:" log message
- **URL looks correct but form still fails?** Make sure you deployed with "Anyone" access
- **Need to restart?** Stop your dev server (Ctrl+C) and run `npm run dev` again

Your Google Script URL should look exactly like this:
`https://script.google.com/macros/s/AKfycbwXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/exec`
