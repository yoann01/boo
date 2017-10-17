//modules
const {BrowserWindow} = require('electron')

const path = require('path')
const url = require('url')

// browesrWindos instance
exports.win

// mainWindow createWindow function
exports.createWindow = () => {

  this.win = new BrowserWindow({
    width: 500,
    height: 650,
    minWidth: 500,
    maxWidth: 650,
    minHeight: 650,
    maxHeight:  650
  })

  //enable DevTools
  this.win.webContents.openDevTools()
  this.win.setMenu(null)

  //load main.html
  this.win.loadURL(url.format({
  pathname: path.join(__dirname, '/renderer/main.html'),
  protocol: 'file:',
  slashes: true
  }))

  //window close event handle
  this.win.on('closed', () => {
    this.win = null
  })
}
