var handleLanguageSelector = {}





handleLanguageSelector.handleChange = function (){
  var selector = document.getElementById("language-options")
  selector.addEventListener("change", function(){
    var selectorValue = selector.value
    console.log(selectorValue)
    localStorage.setItem("languageValue", selectorValue)
  })
}

handleLanguageSelector.populateSelector = function(){
  var languageValue = localStorage.getItem("languageValue")
  var selector = document.getElementById("language-options")
  for(option of selector.options){
    console.log(languageValue)
    console.log(option.value)
    if(languageValue === option.value){
      option.selected = true
      console.log(option.selected)
      console.log(option)
      return
    }
  }
}




module.exports = handleLanguageSelector
