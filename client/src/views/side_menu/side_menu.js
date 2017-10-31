var requestHelper = require("../../helpers/request_helper")


var createHtml = function (wordsArray) {
  var yourWords = document.createElement("ul")
  var nav = document.createElement("nav")
  nav.appendChild(yourWords)
  nav.classList.add("side-menu")
  nav.id = "nav-menu"
  yourWords.innerText = "Your Words"
  yourWords.classList.add("side-menu")
  yourWords.id = "side-menu-ul"
  requestHelper.get("http://localhost:3000/api/words", function (words) {
    words.forEach(function (words) {
      var savedWord = document.createElement("li")
      savedWord.innerText = words.word
      savedWord.classList.add("side-menu-li")
      yourWords.appendChild(savedWord)
    })
  })
  return nav
}


module.exports = createHtml
