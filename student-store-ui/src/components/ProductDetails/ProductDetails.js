import './ProductDetails.css'

import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import { formatAmount } from '../../utils/format';

import axios from "axios"

function ProductDetails (props) {

    const { productID } = useParams();
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState(null);
    const [product, setProduct] = useState();

    useEffect (() => {

        const fetchProductByID = async () => {
            setIsFetching(true);

            try {

                const res = await axios.get(`http://localhost:3001/store/products/${productID}`);
                setProduct(res?.data?.product);

            } catch(err) {
                setError(err);
            }

            setIsFetching(false);
        }

        fetchProductByID();

    }, [productID]);

    console.log(product)

    return (
        <div className="ProductDetails">
            
        </div>
    )
}

export default ProductDetails;