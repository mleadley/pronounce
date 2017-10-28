var renderLandingPage = require("./views/landing_page/landing_page.js")


var app = function () {
  renderLandingPage()
}


window.addEventListener("DOMContentLoaded", app)
