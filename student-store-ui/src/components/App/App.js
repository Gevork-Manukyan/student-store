import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import CheckoutBar from "../CheckoutBar/CheckoutBar";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <CheckoutBar />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

        </Routes>
        
      </BrowserRouter>

    </div>
  );
}

export default App;
