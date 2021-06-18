import './Home.css';

import SearchArea from "../SearchArea/SearchArea"
import ProductDisplay from '../ProductDisplay/ProductDisplay';


function Home (props) {
    return (
        <div className="Home">
            <SearchArea />
            <ProductDisplay setShoppingCart={props.setShoppingCart} />
        </div>
    )
}

export default Home;