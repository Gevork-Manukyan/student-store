const express = require("express");
const Store = require("../models/store")
const router = express.Router();



router.get("/", async(req, res, next) => {
    res.status(200).json({ store: "money" })
})



module.exports = router;