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

    
    return (
        <div className="ProductDetails">
            <div className="flex-container">
                <div className="image-area">
                    <img />
                </div>
                
                <div className="information-area">
                    <span className="product-title"></span>
                    
                    <div className="product-description">

                    </div>

                    <div className="checkout-area">
                        <span className="price"></span>

                        <div className="cart-buttons">
                            <button className="minus-button"></button>

                            <div className="cart-information">

                                <span className="cart-count"></span>
                                <button className="add-to-cart-button"></button>
                                
                            </div>
                            
                            <button className="plus-button"></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;