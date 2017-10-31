var requestHelper = require("./request_helper.js")

var playWebAudio = function (url) {
  var audioCtx = new (window.AudioContext || window.webkitAudioContext)()
  var audioBufferSource = audioCtx.createBufferSource()

  var handleAudio = function (audioBuffer) {
    audioBufferSource.buffer = audioBuffer
    audioBufferSource.connect(audioCtx.destination)
    audioBufferSource.start()
  }

  var decodeMP3 = function (arrayBuffer) {
    audioCtx.decodeAudioData(arrayBuffer, handleAudio)
  }

  requestHelper.getAudio(url, decodeMP3)
}

module.exports = playWebAudio
