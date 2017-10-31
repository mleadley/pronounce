var renderInfoPane = require('./info_pane.js')

var renderWordInfoButton = function () {
  var wordInfoButton = document.createElement("button")
  wordInfoButton.id = "word-info-button"
  wordInfoButton.type = "button"
  wordInfoButton.innerText = "Info"
  var infoContainer = document.querySelector('.hidden')
  wordInfoButton.addEventListener("click", function(){
    if(infoContainer.classList.contains("hidden")){
      infoContainer.classList.remove("hidden")
    } else {
      infoContainer.classList.add("hidden")
    }
  })
  return wordInfoButton
}




module.exports = renderWordInfoButton
