import "./App.css";
import Products from "./components/Products";
import Basket from "./components/Basket";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  const [cart, setCart] = useState([]);

  const add = (pro) => {
    setCart([...cart, pro]);
  };
  return (
    <div className="App">
      <header>
        <div className="wrapper">
          <div onClick={() => setShow(false)} className="shop">
            ALL PRODUCTS
          </div>
          <div onClick={() => setShow(true)} className="bask">
            BASKET
          </div>
        </div>
      </header>
      {!show ? (
        <Products add={add} />
      ) : (
        <Basket setCart={setCart} cart={cart} />
      )}
    </div>
  );
}
export default App;
