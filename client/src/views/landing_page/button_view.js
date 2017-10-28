var renderSearchButton = function () {
  var searchButton = document.createElement('button')
  searchButton.id = "search-button-id"
  searchButton.type = "submit"
  return searchButton
}

var buttonSetup = function (button) {
  var searchBox = document.getElementById('search-box')
  button.addEventListener('click', function() {
    if (searchBox.value.trim != "") {
      wordSearch()
      //this function is to be finished later because kyle is lazy and didnt want to write a search function just yet
    } else {
      searchBox.placeholder = "Type word to search!"
    }
  })
}

var createSearchButton = function () {
  var button = renderSearchButton()
  buttonSetup(button)
  return button
}


module.exports = createSearchButton
