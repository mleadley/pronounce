var clearSideMenu = function () {
  var completed = document.querySelector("#side-menu #completed ul")
  var failed = document.querySelector("#side-menu #failed ul")

  while (completed.firstChild) {
    completed.removeChild(completed.firstChild)
  }

  while (failed.firstChild) {
    failed.removeChild(failed.firstChild)
  }
}

module.exports = clearSideMenu
