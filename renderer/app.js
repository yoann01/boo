
const {ipcRenderer} = require('electron')
// Show add-modal
$('.open-add-modal').click( () => {
  $('#add-modal').addClass('is-active')
})
// Hide add-modal
$('.close-add-modal').click( () => {
  $('#add-modal').removeClass('is-active')
})

// hanle add-modal submission
$('#add-button').click( () => {
  //get url from input
  let newItemUrl = $('#item-input').val()

  if(newItemUrl) {

    // Disable modal UI
    // get item input, change button to loading
    // disable cancel buttonn
    $('#item-input').prop('disabled', true)
    $('#add-button').addClass('is-loading')
    $('.close-add-modal').addClass('is-disabled')

    // Send url to the main process (via ipc)
    ipcRenderer.send('new-item', newItemUrl)
  }
})

// Listen for new item from main process
ipcRenderer.on('new-item-sucess', (event, item) => {
  console.log(item)

  //close and reset modal window
  $('#add-modal').removeClass('is-active')
  $('#item-input').prop('disabled', false).val('')
  $('#add-button').removeClass('is-loading')
  $('.close-add-modal').removeClass('is-disabled')
})

// simulate add click on enter key pressefd
$('#item-input').keyup((event) => {
  if(event.key === 'Enter') $('#add-button').click()
})
