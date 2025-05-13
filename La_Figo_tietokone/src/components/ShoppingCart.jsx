import React from "react";
import { Link } from "react-router-dom";

export default function ShoppingCart({ cart, removeFromCart }) {
  const handleCheckout = () => {
    if (cart.length > 0) {
      alert("Ostos suoritettu kiitos ostoksesi.");
    } else {
      alert("Sinun ostoskori on tyhjä lisää jotain ostoskoriin ennen kun ostat.");
    }
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.hinta, 0); 

  return (
    <div className="shopping-cart">
      <h2>Ostoskori</h2>
      {cart.length === 0 ? (
        <p>Ostoskori on tyhjä.</p>
      ) : (
        <ul>
          {cart.map((item, idx) => (
            <li key={idx}>
              {item.merkki} ({item.hinta} €)
              <button
                className="poista"
                style={{ marginLeft: 10 }}
                onClick={() => removeFromCart(item.tietokonenumero)}
              >
                Poista
              </button>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && <p><b>Yhteensä:</b> {totalPrice} €</p>} {/* Display total price */}
      <button style={{ marginTop: 20 }} onClick={handleCheckout}>
        Osta
      </button>
    </div>
  );
}
