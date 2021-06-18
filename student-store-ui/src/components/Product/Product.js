import { formatAmount } from '../../utils/format';
import { Link } from "react-router-dom";
import './Product.css';


function Product ({ product, position, setShoppingCart }) {

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
                        <button className="addButton button">+</button>
                        <button className="removeButton button">-</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Product;