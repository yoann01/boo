// module
const {BrowserWindow} = require('electron')

// browser window
let bgItemWin

//New read item method
module.exports = (url, callback) => {

  //create ofscreen BrowserWindow
  bgItemWin = new BrowserWindow({
    width: 1000,
    height: 1000,
    show: false,
    webPreferences: {offscreen: true}
  })

  // load read item url
  bgItemWin.loadURL(url)

  //wait for page to finish loading
  bgItemWin.webContents.on('did-finish-load', () => {

    //get screenshot thumbnails
    bgItemWin.webContents.capturePage((image) => {

      // get image as dataUrl
      let screenshot = image.toDataURL()

      //get page title
      let title = bgItemWin.getTitle()

      // return new item via callback
      callback({title, screenshot, url})

      // clean up everything
      bgItemWin.close()
      bgItemWin = null
    })





  })
}
