var recognition = require("../../helpers/web_speech.js")

var renderTrainButton = function () {
  var trainButton = document.createElement("button")
  trainButton.id = "train-button"
  trainButton.type = "button"
  trainButton.innerText = "Start Training"
  trainButton.addEventListener("click", function() {
    recognition.start()
    console.log('Ready to receive a word command.')
  })
  return trainButton
}

module.exports = renderTrainButton
