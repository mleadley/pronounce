var handleLanguageSelector = {}





handleLanguageSelector.handleChange = function (){
  var selector = document.getElementById("language-options")
  selector.addEventListener("change", function(){
    var selectorValue = selector.value
    localStorage.setItem("languageValue", selectorValue)
  })
}

handleLanguageSelector.populateSelector = function(){
  var languageValue = localStorage.getItem("languageValue")
  var selector = document.getElementById("language-options")
  for(option of selector.options){
    if(languageValue === option.value){
      option.selected = true
      return
    }
  }
}




module.exports = handleLanguageSelector
