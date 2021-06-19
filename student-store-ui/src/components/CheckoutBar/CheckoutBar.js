import './CheckoutBar.css';

import { useState } from "react"

function CheckoutBar (props) {

    const [isOpen, setIsOpen] = useState(false);

    const handleArrowOnClick = () => {
        if (isOpen)
            setIsOpen(false);
        else if (!isOpen)
            setIsOpen(true);
    } 

    const renderShoppingCart = () => {
        const productsArr = [];

        for (const property in props.shoppingCart) {
            productsArr.push(
                <>
                    <span className="item">{property}: {props.shoppingCart[property]}</span>
                </>
            )
        }

        return productsArr;
    }

    return (
        <section className={`CheckoutBar ${isOpen ? "open" : "closed"}`}>
            <div className="content-wrapper">
                <span className={`arrow-button ${isOpen ? "open" : "closed"}`} onClick={handleArrowOnClick}>
                    <i className="material-icons md-48">arrow_forward</i>
                </span>

                <div className={`shoppingCart ${isOpen ? "open" : "closed"}`}>
                    <span>Shopping Cart</span>
                    <div>
                        {renderShoppingCart()}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CheckoutBar;