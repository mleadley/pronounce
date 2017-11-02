var express = require("express")
var router = express.Router()
var request = require('request');

var requestAudio = function (req, res) {
  request(
    {
      url: req.params.url,
      encoding: null
    },
    function (error, response, body) {
      if (error) console.error(error)
      console.log("statusCode:", response && response.statusCode)

      res.type("arraybuffer")
      res.send(body)
    }
  )
}

router.get("/:url", requestAudio)

module.exports = router
