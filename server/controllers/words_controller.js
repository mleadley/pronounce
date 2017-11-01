const express = require("express")
const router = express.Router()
const wordsQuery = require("../db/words_query")

// INDEX
var indexRoute = function (req, res) {
  wordsQuery.all(function (data) {
    res.json(data)
  })
}

router.get("/", indexRoute)

// SHOW
var showRoute = function (req, res) {
  var query = { word: req.params.word }
  wordsQuery.find(query, function (data) {
    res.json(data)
  })
}

router.get("/:word", showRoute)

// CREATE
// var newRoute = function (req, res) {
//   var wordData = req.body
//   wordsQuery.save(wordData, wordData, function () {
//     res.json(data)
//   })
// }
//
// router.post("/", newRoute)

// UPDATE
var updateRoute = function (req, res) {
  var query = { word: req.params.word }
  var wordData = req.body
  wordsQuery.save(query, wordData, function (data) {
    res.json(data)
  })
}

router.post("/:word", updateRoute)
router.put("/:word", updateRoute)

// DELETE
var deleteRoute = function (req, res) {
  var query = { word: req.params.word }
  wordsQuery.delete(query, function (data) {
    res.json(data)
  })
}

router.post("/:word/delete", deleteRoute)
router.delete("/:word", deleteRoute)

module.exports = router
