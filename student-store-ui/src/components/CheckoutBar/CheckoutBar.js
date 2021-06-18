import './CheckoutBar.css';

import { useState } from "react"

function CheckoutBar () {

    const [isOpen, setIsOpen] = useState(false);

    const handleArrowOnClick = () => {
        if (isOpen)
            setIsOpen(false);
        else if (!isOpen)
            setIsOpen(true);
    } 


    return (
        <section className={`CheckoutBar ${isOpen ? "open" : "closed"}`}>
            <div className="content-wrapper">
                <span className={`arrow-button ${isOpen ? "open" : "closed"}`} onClick={handleArrowOnClick}>
                    <i className="material-icons md-48">arrow_forward</i>
                </span>

                <div className="shoppingCart">

                </div>
            </div>
        </section>
    )
}

export default CheckoutBar;