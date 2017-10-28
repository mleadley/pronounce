var renderSearchButton = require("./button_view.js")


var renderTitle = function () {
  var titleTag = document.createElement('h1')
  titleTag.id = "main-title"
  titleTag.innerText = "Pronounce"
  titleTag.label = "main title"
  return titleTag
}

var renderSearchBox = function () {
  var searchBox = document.createElement('input')
  searchBox.type = "search"
  searchBox.id = "search-box"
  searchBox.placeholder = "Seach for word"
  searchBox.required = true
  var labelSearchBox = document.createElement('label')
  labelSearchBox.for = "search-box"
  labelSearchBox.innerText = "Seach your word here"
  return searchBox
}

var renderLandingPage = function () {
  var start = document.getElementById("start-chain")
  var titleDiv = document.createElement('div')
  start.appendChild(titleDiv.appendChild(renderTitle()))
  titleDiv.class = "landing-page"
  searchBoxDiv = document.createElement('div')
  start.appendChild(searchBoxDiv.appendChild(renderSearchBox()))
  searchBoxDiv.class = "landing-page"
  searchButtonDiv = document.createElement('div')
  start.appendChild(searchButtonDiv.appendChild(renderSearchButton()))
  searchButtonDiv.class = "landing-page"
}


module.exports = renderLandingPage
