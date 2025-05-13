import React, { useState, useEffect } from "react";
import ComputerList from "./components/ComputerList";
import ShoppingCart from "./components/ShoppingCart";
import CartSummary from "./components/CartSummary";

export default function App() {
  const [computers, setComputers] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("/src/data/tietovarasto.json")
      .then((res) => res.json())
      .then((data) => setComputers(data));
  }, []);

  const addToCart = (pc) => setCart([...cart, pc]);
  const removeFromCart = (tietokonenumero) => {
    const idx = cart.findIndex(
      (item) => item.tietokonenumero === tietokonenumero
    );
    if (idx !== -1) {
      setCart(cart.filter((_, i) => i !== idx));
    }
  };

  return (
    <div className="container">
      <h1>Tietokoneet</h1>
      <ComputerList computers={computers} addToCart={addToCart} />
      <ShoppingCart cart={cart} removeFromCart={removeFromCart} />
      <CartSummary cart={cart} />
    </div>
  );
}
