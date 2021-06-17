const { storage } = require("../data/storage");


class Store {

    static async listProducts () {
        //list all elements in the products array
        const products = storage.get("products").value();
        return products;
    }

    static async fetchProductByID (productID) {
        //fetch a single product 
        const product = storage.get("products").find({ id: Number(productID) }).value();
        return product;
    }
}

module.exports = Store;