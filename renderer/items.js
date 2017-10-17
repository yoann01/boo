//track items with an array
exports.toreadItems = JSON.parse(localStorage.getItem('toreadItems')) || []


//save items to localStorage
exports.saveItems = () => {
  localStorage.setItem('toreadItems', JSON.stringify(this.toreadItems))
}

//add new Item
exports.addItem = (item) => {

  //hide the no item message
  $('#no-items').hide()

  // new item html (bulma panel block)
  let itemHTML =  `<a class="panel-block read-item">
                  <figure class="image has-shadow is-64x64 thumb">
                  <img src="${item.screenshot}">
                  </figure>
                  <h2 class="title is-4 column">${item.title}</h2>
                  </a>`

  //append to real list
  $('#read-list').append(itemHTML)

}
