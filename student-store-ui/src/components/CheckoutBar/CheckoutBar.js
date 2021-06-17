import './CheckoutBar.css';


function CheckoutBar () {
    return (
        <section className="CheckoutBar closed">
            <div className="content-wrapper">
                <span className="arrow-button closed">
                    <i className="material-icons md-48">arrow_forward</i>
                </span>

                <div className="shoppingCart">

                </div>
            </div>
        </section>
    )
}

export default CheckoutBar;