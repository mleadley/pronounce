var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var recognition = new SpeechRecognition();

recognition.lang = 'en-UK';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

var diagnostic = document.querySelector('.output');
var conf = document.querySelector('.confidence');
var button = document.querySelector('#train-button');

button.onclick = function() {
  recognition.start();
  console.log('Ready to receive a word command.');
}

recognition.onresult = function(event) {

  var last = event.results.length - 1;
  var word = event.results[last][0].transcript;

  diagnostic.textContent = 'Result received: ' + word
  conf.textContent = "Confidence: " + event.results[0][0].confidence;

  console.log('Confidence: ' + event.results[0][0].confidence);
}

recognition.onspeechend = function() {
  recognition.stop();
}

recognition.onnomatch = function(event) {
  console.log("I didn't recognise that word.");
}

recognition.onerror = function(event) {
  console.log('Error occurred in recognition: ' + event.error);
}
