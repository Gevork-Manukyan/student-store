import axios from "axios"
import { useState, useEffect } from "react";

import "./ProductDisplay.css"
import Product from "../Product/Product";


function ProductDisplay (props) {

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
        <div className="ProductDisplay flex-container">
            {products.map((product, idx) => (
                <Product product={product} position={idx} key={idx} setShoppingCart={props.setShoppingCart} /> 
            ))}
        </div>
    )
}

export default ProductDisplay;