var handleDifficultySelector = {}





handleDifficultySelector.handleChange = function (){
  var selectorValue = "2"
  var selector = document.getElementById("difficulty-options")
  selector.addEventListener("change", function(){
    if (selector.value != null) {
      selectorValue = selector.value
    }
    localStorage.setItem("difficultyValue", selectorValue)
  })
}

handleDifficultySelector.populateSelector = function(){
  if (localStorage.getItem("difficultyValue") === null) {
    localStorage.setItem("difficultyValue", "2")
  }
  var difficultyValue = localStorage.getItem("difficultyValue")
  var selector = document.getElementById("difficulty-options")
  for(option of selector.options){
    if(difficultyValue === option.value){
      option.selected = true
      return
    }
  }
}




module.exports = handleDifficultySelector
