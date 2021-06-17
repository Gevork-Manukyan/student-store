import { formatAmount } from '../../utils/format';
import './Product.css';


function Product ({ product, position }) {

    return (
        <div className="Product">
            <img src={product.image} alt={product.name} />

            <div className="bottom-row flex-container">
                <div className="productInfo">
                    <span className="productName">{product.name}</span>
                    <span className="productPrice">{formatAmount(product.price)}</span>
                </div>

                <div className="productButtons">
                    <button className="addButton button">
                        <span>+</span>
                    </button>
                    <button className="removeButton button">
                        <span>-</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Product;