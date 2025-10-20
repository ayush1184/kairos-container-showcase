# Google Apps Script Setup Guide

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new blank spreadsheet
3. Name it "Kairos Container Contact Form Responses" (or whatever you prefer)
4. In the first row (A1:F1), add these column headers:
   - A1: `Timestamp`
   - B1: `Name`
   - C1: `Email`
   - D1: `Phone`
   - E1: `Project Type`
   - F1: `Message`

## Step 2: Open Google Apps Script

1. In your Google Sheet, go to **Extensions** → **Apps Script**
2. This will open a new tab with the Apps Script editor
3. Delete the default `myFunction` code

## Step 3: Add the Script Code

Copy and paste this complete code into the Apps Script editor:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet (the one you created)
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Validate required fields
    if (!data.name || !data.email || !data.projectType || !data.message) {
      return ContentService
        .createTextOutput(JSON.stringify({
          success: false,
          error: 'Missing required fields'
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Prepare the row data to insert
    const rowData = [
      data.timestamp || new Date().toISOString(),
      data.name.trim(),
      data.email.trim(),
      data.phone || '',
      data.projectType,
      data.message.trim()
    ];
    
    // Add the data to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Data added successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Function to test the script (optional)
function testFunction() {
  const testData = {
    timestamp: new Date().toISOString(),
    name: 'Test User',
    email: 'test@example.com',
    phone: '123-456-7890',
    projectType: 'residential',
    message: 'This is a test message'
  };
  
  const result = doPost({
    postData: {
      contents: JSON.stringify(testData)
    }
  });
  
  console.log(result.getContent());
}
```

## Step 4: Save the Script

1. Click **Ctrl+S** (or **Cmd+S** on Mac) to save
2. Give your project a name like "Contact Form Handler"

## Step 5: Deploy as Web App

1. Click the **Deploy** button (blue button in the top right)
2. Select **New deployment**
3. Click the gear icon next to "Type" and select **Web app**
4. Set the following:
   - **Description**: "Contact Form Handler"
   - **Execute as**: "Me"
   - **Who has access**: "Anyone" (this is important for your website to access it)
5. Click **Deploy**
6. **IMPORTANT**: Copy the Web App URL that appears - you'll need this for your website

## Step 6: Update Your Website

1. Open your project's `.env` file
2. Replace `your_google_script_url_here` with the actual Web App URL you copied
3. Save the file

Example:
```
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

## Step 7: Test Your Setup

1. Start your development server: `npm run dev`
2. Go to your contact form
3. Fill out and submit the form
4. Check your Google Sheet - you should see the data appear!

## Troubleshooting

### If form submission fails:
1. Make sure the Web App URL is correct in your `.env` file
2. Ensure you deployed the script with "Anyone" access
3. Check the browser console for any error messages

### If data doesn't appear in the sheet:
1. Go back to Apps Script and check the "Executions" tab for any errors
2. Make sure your Google Sheet has the correct column headers
3. Try running the `testFunction` in Apps Script to verify it works

### Security Note:
This setup allows anyone to submit data to your Google Sheet. For production use, you might want to add additional validation or authentication.

## Next Steps

Once everything is working:
1. Test with different form inputs
2. Consider adding email notifications when new submissions arrive
3. Set up automatic backups of your Google Sheet
4. Monitor the sheet regularly for new submissions

Your contact form is now connected to Google Sheets! 🎉
