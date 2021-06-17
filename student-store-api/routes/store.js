const express = require("express");
const Store = require("../models/store")
const router = express.Router();



router.get("/", async(req, res, next) => {
    res.status(200).json({ store: "money" })
})

// list all products
router.get("/products", async(req, res, next) => {
    try {

        const products = await Store.listProducts();
        res.status(200).json({ products }); //same as doing "products: products"

    } catch (err) {
        next(err);
    }
})


module.exports = router;