var renderTrainButton = require("./trainButton-view.js")
var renderWordInfoButton = require("./infoButton-view.js")
var renderSoundButton = require("./soundButton-view.js")

var renderWordTitle = function (currentWord) {
var wordTitle = document.createElement("h1")
wordTitle.id = "word-title"
wordTitle.innerText = currentWord
wordTitle.label = "word title"
return wordTitle
}


var renderPhoneticField = function (currentWord) {
var phoneticField = document.createElement("h3")
phoneticField.id = "phonetic-field"
phoneticField.innerText = currentWord
phoneticField.label = "phonetic filed"
return phoneticField
}

var renderScoreVisualisation = function (visualisation){
var scoreVisualisation = document.createElement("p")
scoreVisualisation.id = "score-visualisation"
scoreVisualisation.innerText = visualisation
scoreVisualisation.label = "score visualisation"
return scoreVisualisation
}





var renderWordPage = function(currentWord){
  var start = document.getElementById("start-chain")
  var wordTitle = document.createElement("div")
  start.appendChild(wordTitle)
  wordTitle.appendChild(renderWordTitle(currentWord))
  wordTitle.classList.add("word-page")
  wordTitle.id = "word-title-div"

  var phoneticField = document.createElement("div")
  phoneticField.classList.add("word-page")
  phoneticField.id = "word-phonetic-div"
  phoneticField.appendChild(renderPhoneticField(currentWord))
  wordTitle.appendChild(phoneticField)

  var wordInfoButton = document.createElement("div")
  wordInfoButton.classList.add("word-page")
  wordInfoButton.id = "word-info-button-div"
  wordInfoButton.appendChild(renderWordInfoButton())
  wordTitle.appendChild(wordInfoButton)



  var wordSoundButton = document.createElement("div")
  wordSoundButton.classList.add("word-page")
  wordSoundButton.id = "word-sound-button-div"
  wordSoundButton.appendChild(renderSoundButton())
  start.appendChild(wordSoundButton)


  var trainButton = document.createElement("div")
  trainButton.classList.add("word-page")
  trainButton.id = "train-button-div"
  trainButton.appendChild(renderTrainButton())
  start.appendChild(trainButton)


  var scoreVisualisation = document.createElement("div")
  scoreVisualisation.classList.add("word-page")
  scoreVisualisation.id = "score-visualisation-div"
  scoreVisualisation.appendChild(renderScoreVisualisation())
  start.appendChild(scoreVisualisation)



}

module.exports = renderWordPage
