import './App.css';

import CheckoutBar from "../CheckoutBar/CheckoutBar";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";


function App() {
  return (
    <div className="App">
        <Navbar />
        <CheckoutBar />
        <Home />
    </div>
  );
}

export default App;
