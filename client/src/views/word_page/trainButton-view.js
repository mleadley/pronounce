var startRecognition = require("../../helpers/web_speech.js")

var renderTrainButton = function (currentWord) {
  var recognition = startRecognition()
  var diagnostic = document.querySelector('#score-visualisation');

  recognition.onresult = function(event) {
    var last = event.results.length - 1;
    var recognisedWord = event.results[last][0].transcript.toLowerCase();
    currentWord = currentWord.toLowerCase();

    var wordMatch = currentWord === recognisedWord
    conf = event.results[0][0].confidence * 100;

    var difficultyValue = localStorage.getItem("difficultyValue")
    console.log(difficultyValue)

    switch(difficultyValue) {
      case "1":
        diffLevel = 0;
        break;
      case "2":
        diffLevel = 75;
        break;
      case "3":
        diffLevel = 90;
    }

    var move = function() {
      var width = 0;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= conf) {
          clearInterval(id);
        } else {
          width++;
          diagnostic.style.width = width + '%';
          diagnostic.innerHTML = "CORRECT " + width * 1  + '%';
        }
      }
    }

    if ((conf > diffLevel) && (wordMatch)) {
      diagnostic.style["background-color"] = "green"
      move();
    } else {
      diagnostic.style.width = 100 + '%'
      diagnostic.style["background-color"] = "red"
      diagnostic.textContent = "TRY AGAIN"
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
    diagnostic.innerHTML = ''
    diagnostic.style["background-color"] = "white"
  })
  return trainButton
}

module.exports = renderTrainButton
