var requestHelper = require("../../helpers/request_helper.js")
var getAudioPlayer = require("../../helpers/web_audio.js")
var renderTrainButton = require("./trainButton-view.js")
var renderWordInfoButton = require("./infoButton-view.js")
var renderSoundButton = require("./soundButton-view.js")
var handleInfoPane = require('./info_pane.js')


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

var renderWordPage = function (currentWord, phonetic, playAudio) {
  var start = document.getElementById("start-chain")

  var wordTitle = document.createElement("div")
  start.appendChild(wordTitle)
  wordTitle.appendChild(renderWordTitle(currentWord))
  wordTitle.classList.add("word-page")
  wordTitle.id = "word-title-div"

  var phoneticField = document.createElement("div")
  phoneticField.classList.add("word-page")
  phoneticField.id = "word-phonetic-div"
  phoneticField.appendChild(renderPhoneticField(phonetic))
  wordTitle.appendChild(phoneticField)

  var wordInfoButton = document.createElement("div")
  wordInfoButton.classList.add("word-page")
  wordInfoButton.id = "word-info-button-div"
  wordInfoButton.appendChild(renderWordInfoButton())
  wordTitle.appendChild(wordInfoButton)

  var wordSoundButton = document.createElement("div")
  wordSoundButton.classList.add("word-page")
  wordSoundButton.id = "word-sound-button-div"
  wordSoundButton.appendChild(renderSoundButton(playAudio))
  start.appendChild(wordSoundButton)

  var scoreVisualisation = document.createElement("div")
  scoreVisualisation.classList.add("word-page")
  scoreVisualisation.id = "score-visualisation-div"
  scoreVisualisation.appendChild(renderScoreVisualisation())
  start.appendChild(scoreVisualisation)

  var trainButton = document.createElement("div")
  trainButton.classList.add("word-page")
  trainButton.id = "train-button-div"
  trainButton.appendChild(renderTrainButton(currentWord))
  start.appendChild(trainButton)
}

var makeDictionaryRequest = function (currentWord) {
  var url = "http://localhost:3000/api/oed/" + currentWord
  requestHelper.get(url, function (oedData) {
    console.log(oedData);
    handleInfoPane.render(oedData)
    var audioFileURL
    var phonetic

    for(pronunciation of oedData.results[0].lexicalEntries[0].pronunciations) {
      if (audioFileURL) break
      audioFileURL = pronunciation.audioFile
      phonetic = pronunciation.phoneticSpelling
    }

    playAudio = getAudioPlayer(audioFileURL)

    renderWordPage(currentWord, phonetic, playAudio)
  })
}

module.exports = makeDictionaryRequest
