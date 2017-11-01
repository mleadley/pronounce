// var webkitSpeechRecognition = webkitSpeechRecognition || null
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition

var startRecognition = function() {
  if (SpeechRecognition) {
    var recognition = new SpeechRecognition();

    var languageValue = localStorage.getItem("languageValue")

    if (languageValue === null){
      recognition.lang = "en-GB"
    } else {
      recognition.lang = languageValue;
      console.log(languageValue + "butts")
    }
    console.log(recognition.lang)
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onspeechend = function() {
      recognition.stop();
    }

    recognition.onnomatch = function(event) {
      console.log("I didn't recognise that word.");
    }

    recognition.onerror = function(event) {
      console.log('Error occurred in recognition: ' + event.error);
    }
    return recognition;
  }
}

module.exports = startRecognition
