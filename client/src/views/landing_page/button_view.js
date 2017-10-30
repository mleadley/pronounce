var renderSearchButton = function () {
  var searchButton = document.createElement("button")
  searchButton.id = "search-button-id"
  searchButton.type = "submit"
  return searchButton
}

var buttonSetup = function (button) {
  button.id = "search-button"
  button.innerHTML = "&#x1F50D;"
}

var createSearchButton = function () {
  var button = renderSearchButton()
  buttonSetup(button)
  return button
}


module.exports = createSearchButton
