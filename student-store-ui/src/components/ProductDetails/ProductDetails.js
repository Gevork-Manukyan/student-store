import './ProductDetails.css'

import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import { formatAmount } from '../../utils/format';

import axios from "axios"

function ProductDetails (props) {

    const { productID } = useParams();
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState(null);
    const [product, setProduct] = useState({});

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
                    <img className="product-image" src={product.image} alt={product.name} /> 
                    <span className="product-category">Category: {product.category}</span>
                </div>
                
                <div className="information-area">
                    <span className="product-title"> {product.name} </span>
                    <div className="product-description"> {product.description} </div>

                    <div className="checkout-area">
                        <span className="price">{formatAmount(product.price)}</span>

                        <div className="cart-buttons">
                            <div className="minus-button btn">
                                <span className="minus material-icons md-48">remove</span>
                            </div>

                            <div className="cart-information">

                                <span className="cart-count">5</span>
                                <span className="add-to-cart-button">Add To Cart</span>

                            </div>
                            
                            <div className="plus-button btn">
                                <span className="plus material-icons md-48">add</span>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;