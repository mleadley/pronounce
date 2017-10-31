var Dictionary = require("oxford-dictionary-api")
var express = require("express")
var router = express.Router()

var oedObject = {
  "app_id": "7a01cc33",
  "app_key": "4fd6c7b12e4193c9f1a91247d754585b"
}


var findRoute = function (req, res){
  var wordToFind = req.params.word
  var oed = new Dictionary(oedObject.app_id, oedObject.app_key)
  oed.find(wordToFind, function(err, data){
    res.json(data)
  })
}


router.get("/:word", findRoute)

module.exports = router
