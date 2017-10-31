var clearStartChain = function () {
  var startChain = document.getElementById("start-chain")
  while (startChain.firstChild) {
    startChain.removeChild(startChain.firstChild)
  }
}

module.exports = clearStartChain
