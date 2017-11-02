var renderSearchButton = require("./button_view.js")
var renderWordPage = require("../word_page/word_page.js")
var clearStartChain = require("../../helpers/clear_start_chain.js")
var settingButtons = require("../side_menu/settingButtons.js")
var languageButtons = require("../side_menu/language_settings.js")

var renderLandingPage = function () {
  var onSearch = function (event) {
    var chosenWord = event.target[0].value
    clearStartChain()
    renderWordPage(chosenWord, renderLandingPage)
  }

  var renderTitle = function () {
    var titleTag = document.createElement("h1")
    titleTag.id = "main-title"
    titleTag.innerText = "Pronounce"
    titleTag.label = "main title"
    return titleTag
  }

  var renderSearchBox = function () {
    var searchBox = document.createElement("input")
    searchBox.type = "search"
    searchBox.id = "search-box"
    searchBox.placeholder = "Search for a word"
    searchBox.required = true
    searchBox.autofocus = true
    searchBox.autocomplete = true
    var labelSearchBox = document.createElement("label")
    labelSearchBox.for = "search-box"
    labelSearchBox.innerText = "Search for a word"
    return searchBox
  }

  settingButtons.handleChange()
  settingButtons.populateSelector()
  languageButtons.handleChange()
  languageButtons.populateSelector()

  var start = document.getElementById("start-chain")
  var titleDiv = document.createElement("div")
  start.appendChild(titleDiv)
  titleDiv.appendChild(renderTitle())
  titleDiv.classList.add("landing-page")
  titleDiv.id = "title-div"

  var searchBoxDiv = document.createElement("div")
  searchBoxDiv.classList.add("landing-page")
  searchBoxDiv.id = "search-box-div"

  var comboInputButtonDiv = document.createElement("div")
  comboInputButtonDiv.id = "combo-input-button"

  var searchForm = document.createElement("form")
  searchForm.id = "search-form"

  var searchBox = renderSearchBox()
  var searchButton = renderSearchButton()

  searchForm.addEventListener("submit", onSearch)

  searchForm.appendChild(searchBox)
  searchForm.appendChild(searchButton)

  comboInputButtonDiv.appendChild(searchForm)

  searchBoxDiv.appendChild(comboInputButtonDiv)

  start.appendChild(searchBoxDiv)
}


module.exports = renderLandingPage
