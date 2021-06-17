import axios from "axios"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./ProductDisplay.css"
import Product from "../Product/Product";


function ProductDisplay () {

    /* STATES */
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState(null);
    const [products, setProducts] = useState([])


    useEffect (() => {
        
        const fetchProducts = async () => {
            setIsFetching(true);
            
            try {
                let res = await axios.get("http://localhost:3001/store/products");
                let products = res?.data?.products;
                
                console.log(products)
                if (products) //if products exists
                    setProducts(products);

            } catch (err) {
                setError(err);
            }


            setIsFetching(false);
        }

        fetchProducts();

    }, [])



    return (
        <div className="ProductDisplay">
            {products.map((product, idx) => (
                <Link to={""}> <Product products={products} position={idx} /> </Link>
            ))}
        </div>
    )
}

export default ProductDisplay;