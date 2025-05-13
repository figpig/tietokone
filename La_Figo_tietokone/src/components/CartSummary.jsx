import React from "react";

export default function CartSummary({ cart }) {
  if (cart.length === 0) return null;

  // Group by tietokonenumero
  const summary = cart.reduce((acc, pc) => {
    acc[pc.tietokonenumero] = acc[pc.tietokonenumero] || { ...pc, count: 0 };
    acc[pc.tietokonenumero].count += 1;
    return acc;
  }, {});

  const total = cart.reduce((sum, pc) => sum + pc.hinta, 0);

  return (
    <div className="cart-summary">
      <h2>Yhteenveto</h2>
      <ul>
        {Object.values(summary).map((item) => (
          <li key={item.tietokonenumero}>
            {item.merkki} x {item.count} ({item.hinta * item.count} €)
          </li>
        ))}
      </ul>
      <b>Yhteishinta: {total} €</b>
    </div>
  );
}
