// Modules required to control application life and create native browser window
const {app, BrowserWindow} = require('electron')

// function to setup the start-up screen
function createWindow(){
    // Create the browser window
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        },
    })

    // load the index.html of the app
    mainWindow.loadFile('index.html')
    // Open the DevTools
    // mainWindow.webContents.openDevTools()
}

// This method will be called when electron has finished 
// initialization and is ready to create browser windows.
app.whenReady().then(createWindow)