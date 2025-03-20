const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const iconPath = process.platform === 'darwin' 
    ? path.join(__dirname, 'assets/icons/mimi.icns')
    : path.join(__dirname, 'assets/icons/mimi.png'); // Use .ico for Windows

  const mainWindow = new BrowserWindow({
    width: 450,
    height: 478,
    icon: iconPath,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  });

  mainWindow.loadFile('index.html');
}

app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS, re-create a window when the dock icon is clicked and there are no other windows open
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
