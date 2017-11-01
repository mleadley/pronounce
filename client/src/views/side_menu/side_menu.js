var requestHelper = require("../../helpers/request_helper")


var renderSideMenu = function (wordsArray) {
  var nav = document.querySelector("nav#side-menu")

  var yourWords = document.createElement("ul")
  yourWords.classList.add("hidden")

  requestHelper.get("http://localhost:3000/api/words", function (words) {
    words.forEach(function (words) {
      var savedWord = document.createElement("li")
      savedWord.innerText = words.word
      yourWords.appendChild(savedWord)
    })
  })

  nav.appendChild(yourWords)

  var hamburgerButton = document.querySelector(".hamburger")

  hamburgerButton.addEventListener("click", function () {
    if(yourWords.classList.contains("hidden")){
      hamburgerButton.classList.add("is-active")
      yourWords.classList.remove("hidden")
    } else {
      hamburgerButton.classList.remove("is-active")
      yourWords.classList.add("hidden")
    }
  })
}


module.exports = renderSideMenu
