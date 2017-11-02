var renderLandingPage = require("./views/landing_page/landing_page.js")
var renderSideMenu = require("./views/side_menu/side_menu.js")
var renderWordPage = require("./views/word_page/word_page.js")

var app = function () {
  renderLandingPage()
  renderSideMenu(renderWordPage, renderLandingPage)
}

window.addEventListener("DOMContentLoaded", app)
