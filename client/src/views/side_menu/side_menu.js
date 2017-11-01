var requestHelper = require("../../helpers/request_helper")


var renderSideMenu = function (wordsArray) {
  var nav = document.querySelector("nav#side-menu")
  var completedList = nav.querySelector("#completed ul")

  requestHelper.get("http://localhost:3000/api/words", function (words) {
    words.forEach(function (words) {
      var savedWord = document.createElement("li")
      savedWord.innerText = words.word
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
