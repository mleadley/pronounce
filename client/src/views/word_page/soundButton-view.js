var renderSoundButton = function () {
var soundButton = document.createElement("button")
soundButton.id = "sound-button"
soundButton.type = "button"
soundButton.innerText = "Sound"
soundButton.innerHTML = "<img src = './images/speaker-with-three-sound-waves_1f50a(3).png' alt = 'Play Sound'>"
soundButton.addEventListener("click", function(){

})
return soundButton
}





module.exports = renderSoundButton
