import axios from "axios"
import { useState, useEffect } from "react";

import "./ProductDisplay.css"


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
                console.log(res.data.products)
                
                if (products) //if products exists
                    setProducts(res);

            } catch (err) {
                setError(err);
            }


            setIsFetching(false);
        }

        fetchProducts();

    }, [])

    return (
        <div className="ProductDisplay">
            
        </div>
    )
}

export default ProductDisplay;