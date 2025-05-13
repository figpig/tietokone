import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ComputerList from "./components/ComputerList";
import ShoppingCart from "./components/ShoppingCart";
import CartSummary from "./components/CartSummary";

export default function App() {
  const [computers, setComputers] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/autot")
      .then((res) => {
        if (!res.ok) throw new Error("Verkkovirhe");
        return res.json();
      })
      .then((data) => setComputers(data))
      .catch((error) => console.error("Virhe tuotteiden haussa:", error));
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
    <Router>
      <div className="container">
        <header>
          <Link to="/" className="logo">
            <h1>Tietokoneet</h1>
          </Link>
          <Link to="/ostoskori" className="cart-button">
            Ostoskori ({cart.length})
          </Link>
        </header>
        <Routes>
          <Route
            path="/"
            element={
              <ComputerList computers={computers} addToCart={addToCart} />
            }
          />
          <Route
            path="/ostoskori"
            element={
              <ShoppingCart cart={cart} removeFromCart={removeFromCart} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
