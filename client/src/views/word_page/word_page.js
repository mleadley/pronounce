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
phoneticField.label = "phonetic field"
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
  wordTitle.appendChild(renderPhoneticField(currentWord))
  wordTitle.appendChild(renderWordInfoButton())



  var wordSoundButton = document.createElement("div")
  wordSoundButton.classList.add("word-page")
  wordSoundButton.id = "word-sound-button-div"
  wordSoundButton.appendChild(renderSoundButton())
  start.appendChild(wordSoundButton)


  var scoreVisualisation = document.createElement("div")
  scoreVisualisation.classList.add("word-page")
  scoreVisualisation.id = "score-visualisation-div"
  scoreVisualisation.appendChild(renderScoreVisualisation())
  start.appendChild(scoreVisualisation)


  var trainButton = document.createElement("div")
  trainButton.classList.add("word-page")
  trainButton.id = "train-button-div"
  trainButton.appendChild(renderTrainButton())
  start.appendChild(trainButton)






}

module.exports = renderWordPage
