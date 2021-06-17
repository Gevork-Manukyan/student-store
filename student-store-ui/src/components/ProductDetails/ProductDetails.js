import './ProductDetails.css'

import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import { formatAmount } from '../../utils/format';

import axios from "axios"
import { NotFoundError } from '../../../../student-store-api/utils/errors';


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
                setProduct(res?.body?.product);

            } catch(err) {
                setError(err);
            }

            setIsFetching(false);
        }

        fetchProductByID();

    }, [productID])

    return (
        <div className="ProductDetails">
            
        </div>
    )
}

export default ProductDetails;