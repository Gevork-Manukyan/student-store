import './Home.css';

import SearchArea from "../SearchArea/SearchArea"
import ProductDisplay from '../ProductDisplay/ProductDisplay';


function Home () {
    return (
        <div className="Home">
            Home
            <SearchArea />
            <ProductDisplay />
        </div>
    )
}

export default Home;