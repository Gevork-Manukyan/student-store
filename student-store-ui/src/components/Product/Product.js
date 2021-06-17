import './Product.css';


function Product ({ products, position }) {
    return (
        <div className="Product">
            {products[position].name}
        </div>
    )
}

export default Product;