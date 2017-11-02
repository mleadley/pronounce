var requestHelper = require("./request_helper.js")

var getAudioPlayer = function (url) {
  var audioCtx = new (window.AudioContext || window.webkitAudioContext)()
  var mainAudioBuffer

  var handleAudio = function (audioBuffer) {
    mainAudioBuffer = audioBuffer
  }

  var decodeMP3 = function (arrayBuffer) {
    audioCtx.decodeAudioData(arrayBuffer, handleAudio)
  }

  requestHelper.getAudio(url, decodeMP3)

  return function () {
    var audioBufferSource = audioCtx.createBufferSource()
    audioBufferSource.buffer = mainAudioBuffer
    audioBufferSource.connect(audioCtx.destination)
    audioBufferSource.start()
  }
}

module.exports = getAudioPlayer
