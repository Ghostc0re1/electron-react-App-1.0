// authHandler.ts
import { ipcMain, app } from 'electron';
// Import other necessary modules, e.g., keytar for secure storage

let authToken: string | null = null;

// Set your application as the default protocol client
export const setupProtocolHandler = () => {
  app.setAsDefaultProtocolClient('myapp');
};

// Handle the custom protocol's URL and extract the token
export const handleAuthenticationUrl = (url: string) => {
  const parsedUrl = new URL(url);
  // Assuming the token is in the query parameter
  authToken = parsedUrl.searchParams.get('token');
  // Here you might want to store the token securely
};

// Set up IPC handlers for the token
export const setupIpcHandlers = (mainWindow: Electron.BrowserWindow) => {
  ipcMain.handle('setAuthToken', (event, token) => {
    authToken = token;
    // Store the token securely
  });

  ipcMain.handle('getAuthToken', () => {
    // Retrieve the token securely
    return authToken;
  });

  // Handle the token received from the protocol handler
  app.on('will-finish-launching', () => {
    app.on('open-url', (event, url) => {
      event.preventDefault();
      handleAuthenticationUrl(url);
      if (mainWindow) {
        mainWindow.webContents.send('token', authToken);
      }
    });
  });
};
