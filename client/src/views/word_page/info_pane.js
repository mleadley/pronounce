renderInfoPane = function(data) {
  var infoPane = document.createElement("div")
  infoPane.id = "info-pane"
  infoPane.classList.add("hidden")

  var counter = 1
  data.results[0].lexicalEntries[0].entries[0].senses.forEach(function (entry){
    var def = document.createElement("p")
    var example = document.createElement("p")

    def.innerHTML = "<strong>Definition " + counter +
                    ":</strong> " + entry.definitions
    infoPane.appendChild(def)

    if(entry.examples != null){
      example.innerHTML = "<strong>Example " + counter +
                          ":</strong> " + entry.examples[0].text
      def.appendChild(example)
    }

    counter += 1
  })

  return infoPane
}

module.exports = renderInfoPane
