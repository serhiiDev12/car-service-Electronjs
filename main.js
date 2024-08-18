function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences:
            {
                nodeIntegration: true, // Enable Node.js integration
                contextIsolation: false, // Disable context isolation for
                preload: path.join(__dirname, 'preload.js') // Preload script
            }
    });

    win.loadURL('http://localhost:3000'); // Load React app from development server

    win.webContents.openDevTools();
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed',
    () => {
        if (process.platform !== 'darwin') app.quit();

    });