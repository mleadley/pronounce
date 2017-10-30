const express = require("express")
const app = express()
const wordsRouter = require("./controllers/words_controller")
const oedRouter = require("./controllers/oed_controller")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + "/../client/build"))

app.use("/api/words", wordsRouter)
app.use("/api/oed", oedRouter)

app.listen(3000)
