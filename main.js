//load module
const {app, ipcMain} = require('electron')
const mainWindow = require('./mainWindow')
const readItem = require('./readItem')

//require('electron-reload')(__dirname)

//Listen from new read item (comming from app.js)
ipcMain.on('new-item', (event, itemURL) => {

    //get read item with read item module
    readItem( itemURL, (item) => {

      console.log(item);
      //send to renderer
      event.sender.send('new-item-sucess', item)
    })
})

app.on('ready', mainWindow.createWindow)

// Quit when all windows are closed.
app.on('window-all-closed',  () => {

  if (process.platform !== 'darwin') {app.quit()}
})

app.on('activate', function () {

  if (mainWindow === null) {mainWindow.createWindow()}
})
