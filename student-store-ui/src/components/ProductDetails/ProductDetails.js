import './ProductDetails.css'

import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import { formatAmount } from '../../utils/format';

import axios from "axios"

function ProductDetails (props) {

    const { productID } = useParams();
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState(null);
    const [cartCount, setCartCount] = useState(0);
    const [product, setProduct] = useState({});
    const [cartObject, setCartObject] = useState({});

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


    const handleAddOneClick = () => {
        setCartCount(() => {
            return cartCount + 1;
        })
    }

    const handleMinusOneClick = () => {
        setCartCount(() => {
            if (cartCount <= 0)
                return 0;

            return cartCount - 1;
        })
    }

    const handleAddToCart = () => {

        if (cartCount <= 0)
            return;

        props.setShoppingCart(oldCart => ({
            ...oldCart, [product.name]: oldCart[product.name] ? oldCart[product.name] + cartCount : cartCount        
        }));
    }

    
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
                            <div className="minus-button btn" onClick={handleMinusOneClick}>
                                <span className="minus material-icons md-48">remove</span>
                            </div>

                            <div className="cart-information">

                                <span className="cart-count">{cartCount}</span>
                                <span className="add-to-cart-button" onClick={handleAddToCart}>Add To Cart</span>

                            </div>
                            
                            <div className="plus-button btn" onClick={handleAddOneClick}>
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