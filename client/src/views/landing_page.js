var renderTitle = function () {
  var titleTag = document.createElement('h1')
  titleTag.id = "main-title"
  titleTag.innerText = "Pronounce"
  titleTag.label = "main title"

}


var renderSearchBox = function () {
  var searchBox = document.createElement('input')
  searchBox.id = "search-box"
  searchBox.placeholder = "Seach for word"
  var labelSearchBox = document.createElement('label')
  label.for = "search-box"
  label.innerText = "Seach your word here"
}
