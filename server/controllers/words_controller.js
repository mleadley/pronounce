const express = require("express")
const router = express.Router()

// INDEX
var indexRoute = function (req, res) {

}

router.get("/", indexRoute)

// SHOW
var showRoute = function (req, res) {

}

router.get("/:word", showRoute)

// NEW
var newRoute = function (req, res) {

}

router.post("/", newRoute)

// UPDATE
var updateRoute = function (req, res) {

}

router.post("/:word", updateRoute)
router.put("/:word", updateRoute)

// DELETE
var deleteRoute = function (req, res) {

}

router.post("/:word/delete", deleteRoute)
router.delete("/:word", deleteRoute)

module.exports = router
