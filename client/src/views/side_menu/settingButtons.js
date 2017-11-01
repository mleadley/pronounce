var handleDifficultySelector = {}





handleDifficultySelector.handleChange = function (){
  var selector = document.getElementById("difficulty-options")
  selector.addEventListener("change", function(){
    var selectorValue = selector.value
    if (selectorValue === null) {
      selectorValue === "2"
    }
    console.log(selectorValue)
    localStorage.setItem("difficultyValue", selectorValue)
  })
}

handleDifficultySelector.populateSelector = function(){
  var difficultyValue = localStorage.getItem("difficultyValue")
  var selector = document.getElementById("difficulty-options")
  for(option of selector.options){
    console.log(difficultyValue)
    console.log(option.value)
    if(difficultyValue === option.value){
      option.selected = true
      console.log(option.selected)
      console.log(option)
      return
    }
  }
}




module.exports = handleDifficultySelector
