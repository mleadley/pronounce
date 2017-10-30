var renderLandingPage = require("./views/landing_page/landing_page.js")
var renderWordPage = require("./views/word_page/word_page.js")

var app = function () {
  renderLandingPage()
}


window.addEventListener("DOMContentLoaded", app)
