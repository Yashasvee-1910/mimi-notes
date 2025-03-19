const { app, BrowserWindow } = require('electron'); // ✅ You missed this line!

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 600,
    height: 628,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  });

  mainWindow.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
