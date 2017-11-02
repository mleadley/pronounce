var renderInfoPane = require("./info_pane.js")

var renderWordInfoButton = function (infoPane) {
  var wordInfoButton = document.createElement("button")
  wordInfoButton.id = "word-info-button"
  wordInfoButton.type = "button"
  wordInfoButton.innerText = "Show Definitions"

  wordInfoButton.addEventListener("click", function () {
    var trainingDiv = document.querySelector("#training-div")

    if (infoPane.classList.contains("hidden")){
      trainingDiv.classList.add("hidden")
      infoPane.classList.remove("hidden")
      infoPane.classList.add("visible")
      wordInfoButton.innerText = "Hide Definitions"
    } else {
      trainingDiv.classList.remove("hidden")
      infoPane.classList.add("hidden")
      infoPane.classList.remove("visible")
      wordInfoButton.innerText = "Show Definitions"
    }
  })

  return wordInfoButton
}

module.exports = renderWordInfoButton
