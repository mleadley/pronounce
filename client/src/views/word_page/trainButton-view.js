var startRecognition = require("../../helpers/web_speech.js")

var renderTrainButton = function (currentWord) {
  var recognition = startRecognition()
  var diagnostic = document.querySelector('p#score-visualisation');

  recognition.onresult = function(event) {
    var last = event.results.length - 1;
    var recognisedWord = event.results[last][0].transcript;

    var wordMatch = currentWord === recognisedWord


    diagnostic.innerHTML = 'Result received: ' + recognisedWord + "<br>" +
                           "Confidence: " + event.results[0][0].confidence + "<br>";

    if (wordMatch) {
      diagnostic.innerHTML += "WORD MATCH!!!"
    }

    console.log('Result received: ' + recognisedWord)
    console.log('Confidence: ' + event.results[0][0].confidence);
  }

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
