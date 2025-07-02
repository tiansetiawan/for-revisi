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

export async function saveToGoogleSheet(data, sheetName = 'Sheet1') {
  try {
    // Ensure headers exist
    await initSheet(sheetName);

    // Append new data
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${sheetName}!A2:F`,
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      resource: {
        values: [
          [
            data.name,
            data.email,
            data.phone || '',
            data.address || '',
            data.message,
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

    console.log('Data saved to contact form sheet:', response.data.updates.updatedRange);
    return response.data;
  } catch (error) {
    console.error('Error saving to Google Sheet:', error);
    throw error;
  }
}

export async function initSheet(sheetName = 'Sheet1') {
  try {
    // Check if sheet exists, if not create it
    const sheetExists = await checkSheetExists(sheetName);
    
    if (!sheetExists) {
      await createNewSheet(sheetName);
    }

    // Check if headers exist
    const headerResponse = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: `${sheetName}!A1:F1`,
    });

    if (!headerResponse.data.values) {
      // Add headers if they don't exist
      await sheets.spreadsheets.values.update({
        spreadsheetId: SPREADSHEET_ID,
        range: `${sheetName}!A1:F1`,
        valueInputOption: 'USER_ENTERED',
        resource: {
          values: [
            ['Nama', 'Email', 'Telepon', 'Alamat', 'Pesan', 'Timestamp']
          ],
        },
      });
      console.log(`Sheet ${sheetName} headers initialized`);
    }
  } catch (error) {
    console.error('Error initializing sheet:', error);
    throw error;
  }
}

async function checkSheetExists(sheetName) {
  try {
    const spreadsheet = await sheets.spreadsheets.get({
      spreadsheetId: SPREADSHEET_ID,
    });
    
    return spreadsheet.data.sheets.some(
      sheet => sheet.properties.title === sheetName
    );
  } catch (error) {
    console.error('Error checking sheet existence:', error);
    return false;
  }
}

async function createNewSheet(sheetName) {
  try {
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId: SPREADSHEET_ID,
      resource: {
        requests: [{
          addSheet: {
            properties: {
              title: sheetName
            }
          }
        }]
      }
    });
    console.log(`New sheet ${sheetName} created`);
  } catch (error) {
    console.error('Error creating new sheet:', error);
    throw error;
  }
}