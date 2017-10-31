var requestHelper = require("../../helpers/request_helper")


var createHtml = function (wordsArray) {
  var nav = document.querySelector("nav#side-menu")

  var yourWords = document.createElement("ul")
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

  nav.appendChild(yourWords)
}


module.exports = createHtml
