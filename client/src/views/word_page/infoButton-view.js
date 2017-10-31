var renderInfoPane = require('./info_pane.js')

var renderWordInfoButton = function () {
  var wordInfoButton = document.createElement("button")
  wordInfoButton.id = "word-info-button"
  wordInfoButton.type = "button"
  wordInfoButton.innerText = "Info"
  wordInfoButton.addEventListener("click", function(){
    var toggleMenu
    if(toggleMenu === true) {
      renderInfoPane.close
    } else {
      renderInfoPane.open
    }
    toggleMenu = true
  })
  return wordInfoButton
}




module.exports = renderWordInfoButton
