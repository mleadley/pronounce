var renderSearchButton = function () {
  var searchButton = document.createElement("button")
  searchButton.type = "submit"
  searchButton.id = "search-button"
  searchButton.innerHTML = "&#x1F50D;"
  return searchButton
}

module.exports = renderSearchButton
