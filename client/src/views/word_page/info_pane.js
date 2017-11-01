renderInfoPane = function(data) {
  var infoPane = document.querySelector("#info-pane")

  var counter = 1
  data.results[0].lexicalEntries[0].entries[0].senses.forEach(function (entry){
    var def = document.createElement("p")
    var example = document.createElement("p")

    def.innerText = "definition " + counter + ": " + entry.definitions
    infoPane.appendChild(def)

    if(entry.examples != null){
      example.innerText = "example " + counter + ": "+ entry.examples[0].text
      def.appendChild(example)
    }
    
    counter += 1
  })
}

module.exports = renderInfoPane
