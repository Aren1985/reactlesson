import React from "react";
import "./Basket.css";
import { useState } from "react";

const Basket = ({ setCart, cart }) => {
  const [qty, setQty] = useState(1);

  const inc = () => {
    if (qty < 10) {
      setQty(qty + 1);
    }
    return qty;
  };

  const dec = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
    return qty;
  };

  const del = (id) => {
    const delo = cart.filter((elem) => elem.id !== id);
    setCart(delo);
  };

  const totalprice = cart.reduce((a, c) => {
    return (a += qty * c.price);
  }, 0);
  return (
    <div>
      {cart.map((car) => {
        return (
          <div key={car.id} className="dvo">
            <h5>{car.name}</h5>
            <img src={car.image} alt={car.name} />

            <span>{car.price}$</span>
            <span> price for items ======{qty * car.price}$</span>
            <br />
            <button onClick={() => inc(car.id)}>+</button>
            <span>{qty}</span>
            <button onClick={dec}>-</button>
            <br />
            <button onClick={() => del(car.id)}>remove product</button>
            <hr />
          </div>
        );
      })}
      <hr />
      <span>TOTAL PRICE ======= {totalprice}</span>
    </div>
  );
};

export default Basket;
