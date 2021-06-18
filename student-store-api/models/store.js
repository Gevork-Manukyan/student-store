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

    static async recordProduct (product) {
        // create a new transaction

        if (!product) {
            throw new BadRequestError(`No product sent.`);
        }

        const requiredFields = ["name", "category", "image", "source", "description", "price"];

        requiredFields.forEach((field) => {
            if (!product[field] && product[field] !== 0) {
                throw new BadRequestError(`Field: "${field}" is required in product`);
            }
        })
    
        const products = await Store.listProducts();
        const productID = products.length + 1;
    
        const newProduct = { id: productID, ...product }
    
        storage.get("products").push(newProduct).write();
    
        return newProduct;
    }
}

module.exports = Store;