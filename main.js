//load module
const {app, ipcMain} = require('electron')
const mainWindow = require('./mainWindow')


//require('electron-reload')(__dirname)

//Listen from new read item (comming from app.js)
ipcMain.on('new-item', (event, itemURL) => {
  setTimeout( () =>{
    // identify the sender of the message
    // and send new ipc message to tha sender
    event.sender.send('new-item-sucess', 'new read item')
  }, 2000)
})


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', mainWindow.createWindow)

// Quit when all windows are closed.
app.on('window-all-closed',  () => {

  if (process.platform !== 'darwin') {app.quit()}
})

app.on('activate', function () {

  if (mainWindow === null) {mainWindow.createWindow()}
})
