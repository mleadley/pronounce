var renderInfoPane = require("./info_pane.js")

var renderWordInfoButton = function () {
  var wordInfoButton = document.createElement("button")
  wordInfoButton.id = "word-info-button"
  wordInfoButton.type = "button"
  wordInfoButton.innerText = "Show Definitions"
  var infoPane = document.querySelector("#info-pane")
  wordInfoButton.addEventListener("click", function(){
    if(infoPane.classList.contains("hidden")){
      infoPane.classList.remove("hidden")
    } else {
      infoPane.classList.add("hidden")
    }
  })
  return wordInfoButton
}

module.exports = renderWordInfoButton
