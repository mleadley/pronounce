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

  find: function (query, callback) {
    MongoClient.connect(this.url, function (err, db) {
      db.collection("words").find(query).toArray(function (err, words) {
        callback(words)
      })
    })
  },

  save: function (query, wordData, callback) {
    MongoClient.connect(this.url, function (err, db) {
      db.collection("words").update(query, wordData, { upsert: true })
      db.collection("words").find().toArray(function (err, docs) {
        callback(docs)
      })
    })
  }
}

module.exports = wordsQuery
