const { google } = require('googleapis');

// Initialize auth globally
const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

// Config
const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;
const SHEET_NAME = 'Sheet1';

export async function initSheet() {
  try {
    // Check if headers exist
    const headerResponse = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A1:E1`,
    });

    if (!headerResponse.data.values) {
      // Add headers if they don't exist
      await sheets.spreadsheets.values.update({
        spreadsheetId: SPREADSHEET_ID,
        range: `${SHEET_NAME}!A1:E1`,
        valueInputOption: 'USER_ENTERED',
        resource: {
          values: [
            ['Dokumen', 'Nama User', 'Email', 'No. Telpon', 'Timestamp']
          ],
        },
      });
      console.log('Sheet headers initialized');
    }
  } catch (error) {
    console.error('Error initializing sheet:', error);
    throw error;
  }
}

export async function saveToGoogleSheet(data) {
  try {
    // Ensure headers exist
    await initSheet();

    // Append new data below headers (row 2)
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A2:E`,
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      resource: {
        values: [
          [
            data.document,
            data.name,
            data.email,
            data.phone,
            new Date().toLocaleString('id-ID', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            }),
          ],
        ],
      },
    });

    console.log('Data saved to row:', response.data.updates.updatedRange);
    return response.data;
  } catch (error) {
    console.error('Error saving to Google Sheet:', {
      message: error.message,
      code: error.code,
      errors: error.errors
    });
    throw error;
  }
}

export async function getDownloadData() {
  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A2:E`, // Skip header row
    });
    
    return response.data.values || [];
  } catch (error) {
    console.error('Error reading from Google Sheet:', error);
    return [];
  }
}

// Helper function to clear test data (for development only)
export async function clearTestData() {
  try {
    await sheets.spreadsheets.values.clear({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A2:Z`,
    });
    console.log('Test data cleared');
  } catch (error) {
    console.error('Error clearing test data:', error);
  }
}