var requestHelper = require("../../helpers/request_helper")

var renderSideMenu = function (wordsArray) {
  var nav = document.querySelector("nav#side-menu")
  var completedList = nav.querySelector("#completed ul")

  requestHelper.get("http://localhost:3000/api/words", function (words) {
    words.forEach(function (word) {
      var savedWord = document.createElement("li")
      var savedWordLink = document.createElement("a")

      savedWordLink.innerText = word.word
      savedWordLink.href = ""
      savedWordLink.addEventListener("click", function (event) {
        event.preventDefault()
        console.log(this.innerText)
      })

      savedWord.appendChild(savedWordLink)
      completedList.appendChild(savedWord)
    })
  })

  var hamburgerButton = document.querySelector(".hamburger")

  hamburgerButton.addEventListener("click", function () {
    if(nav.classList.contains("open")) {
      nav.classList.remove("open")
      hamburgerButton.classList.remove("is-active")
    } else {
      nav.classList.add("open")
      hamburgerButton.classList.add("is-active")
    }
  })
}

module.exports = renderSideMenu
