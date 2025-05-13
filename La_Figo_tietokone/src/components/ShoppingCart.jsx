import React from "react";

export default function ShoppingCart({ cart, removeFromCart }) {
  if (cart.length === 0)
    return <div className="shopping-cart">Ostoskori on tyhjä.</div>;
  return (
    <div className="shopping-cart">
      <h2>Ostoskori</h2>
      <ul>
        {cart.map((item, idx) => (
          <li key={idx}>
            {item.merkki} ({item.hinta} €)
            <button
              style={{ marginLeft: 10 }}
              onClick={() => removeFromCart(item.tietokonenumero)}
            >
              Poista
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
