const express = require("express");
const Store = require("../models/store");
const { NotFoundError } = require("../utils/errors");
const router = express.Router();



// list all products
router.get("/products", async(req, res, next) => {
    try {

        const products = await Store.listProducts();
        res.status(200).json({ products }); //same as doing "products: products"

    } catch (err) {
        next(err);
    }
})

// fetch single product
router.get("/products/:productID", async(req, res, next) => {
    try {

        const productID = req.params.productID;
        const product = await Store.fetchProductByID(productID);

        if(!product) 
            throw new NotFoundError("Product not found");

        res.status(200).json({ product });

    } catch (err) {
        next(err);
    }
})

// create new product
router.post("/products", async (req, res, next) => {
    try {
      const product = req.body.product;
      const newProduct = await Store.recordProduct(product);
      res.status(201).json({ product: newProduct });

    } catch (err) {
      next(err);
    }
  })

module.exports = router;