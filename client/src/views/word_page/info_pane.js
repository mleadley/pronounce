renderInfoPane = {}


renderInfoPane.render = function(data) {
  var start = document.getElementById('start-chain')
  var infoWindow = document.createElement('div')
  infoWindow.classList.add("hidden")
  start.appendChild(infoWindow)
  console.log(data)
  var counter = 1
  data.results[0].lexicalEntries[0].entries[0].senses.forEach(function (entry){
    var def = document.createElement('p')
    var example = document.createElement('p')

    def.innerText = "definition " + counter + ": " + entry.definitions
    if(entry.examples != null){
      example.innerText = "example " + counter + ": "+ entry.examples[0].text
    }
    infoWindow.appendChild(def)
    def.appendChild(example)
    counter += 1

  })


}

renderInfoPane.open = function () {

}

renderInfoPane.close = function () {

}


module.exports = renderInfoPane
