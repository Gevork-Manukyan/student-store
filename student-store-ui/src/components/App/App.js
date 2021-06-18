import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from 'react';

import CheckoutBar from "../CheckoutBar/CheckoutBar";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import ProductDetails from '../ProductDetails/ProductDetails';
import { set } from 'lodash';



function App() {

  //array of objects
  // {
  //   productName: "blah",
  //   amount: 5
  // }
  const [shoppingCart, setShoppingCart] = useState([]);

  return (
    <div className="App">
      
      <BrowserRouter>
        <CheckoutBar />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home setShoppingCart={setShoppingCart} />} />
          <Route path="/store/products/:productID" element={<ProductDetails setShoppingCart={setShoppingCart} />} />

        </Routes>
        
      </BrowserRouter>

    </div>
  );
}

export default App;
