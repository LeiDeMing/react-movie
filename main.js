// Modules to control application life and create native browser window
const {
  BrowserWindow,
  Menu,
  MenuItem,
  ipcMain,
  app
} = require('electron')
const path = require('path')
const url = require('url')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      devTools:true
    }
  })
  mainWindow.webContents.openDevTools()
  console.log(process.env.NODE_ENV)
  if(process.env.NODE_ENV === 'development'){
    mainWindow.loadURL('http://localhost:3000/')
  }else{
    mainWindow.loadURL(url.format({
      pathname: path.join(__dirname, './build/index.html'), protocol: 'file:', slashes: true
    }))
  }
  // mainWindow.loadURL('http://localhost:3000/')
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})

