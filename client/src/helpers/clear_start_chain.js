var clearStartChain = function () {
  var startChain = document.getElementById("start-chain")
  while (startChain.firstChild) {
    startChain.removeChild(startChain.firstChild)
  }
  document.body.classList.remove("tomato")
}

module.exports = clearStartChain
