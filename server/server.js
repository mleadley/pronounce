const express = require("express")
const app = express()
const wordsRouter = require("./controllers/words_controller")

app.use(express.static(__dirname + "/../client/build"))

app.use("/api/words", wordsRouter)

app.listen(3000)
