// windowCreator.ts
import { BrowserWindow } from 'electron';
import path from 'path';
import { resolveHtmlPath } from './util'; // assuming util is in the same directory

export const createWindow = (
  getAssetPath: (...paths: string[]) => string,
): BrowserWindow => {
  // Use getAssetPath to determine the path to assets, like the icon
  const iconPath = getAssetPath('icon.png');
  const mainWindow = new BrowserWindow({
    show: false,
    width: 1024,
    height: 728,
    icon: iconPath,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // Adjust according to your file structure
      // nodeIntegration: false, // uncomment if you disable nodeIntegration
      // contextIsolation: true, // uncomment if you enable contextIsolation
    },
  });

  mainWindow.loadURL(resolveHtmlPath('index.html'));

  mainWindow.on('ready-to-show', () => {
    mainWindow.show();
  });

  mainWindow.on('closed', () => {
    // Dereference the window object
  });

  return mainWindow;
};

export default createWindow;
