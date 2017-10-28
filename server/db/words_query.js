var MongoClient = require("mongodb").MongoClient

var wordsQuery = {
  url: "mongodb://localhost:27017/pronounce",

  all: function (callback) {
    MongoClient.connect(this.url, function (err, db) {
      db.collection("words").find().toArray(function (err, words) {
        callback(words)
      })
    })
  },
}

module.exports = wordsQuery
