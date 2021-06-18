import { formatAmount } from '../../utils/format';
import { useState } from 'react';
import { Link } from "react-router-dom";
import './Product.css';


function Product ({ product, position, setShoppingCart }) {

    const [cartCount, setCartCount] = useState(0);

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

        setShoppingCart(oldCart => ({
            ...oldCart, [product.name]: oldCart[product.name] ? oldCart[product.name] + cartCount : cartCount        
        }));
    }

    return (
        <div className="Product">
            <Link to={`/store/products/${product.id}`}>    
                <img src={product.image} alt={product.name} />
            </Link>

            <div className="bottom-row-wrapper">
                <div className="bottom-row flex-container">
                    <Link to={`/store/products/${product.id}`}>
                        <div className="productInfo">
                            <span className="productName">{product.name}</span>
                            <span className="productPrice">{formatAmount(product.price)}</span>
                        </div>
                    </Link>

                    <div className="productButtons">
                        <button className="addButton button" onClick={handleAddOneClick}>+</button>
                        <button className="removeButton button" onClick={handleMinusOneClick}>-</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Product;