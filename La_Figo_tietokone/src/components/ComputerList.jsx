import React from "react";

export default function ComputerList({ computers, addToCart }) {
  return (
    <div className="computer-list">
      {computers.map((pc) => (
        <div className="computer-item" key={pc.tietokonenumero}>
          <h3>{pc.merkki}</h3>
          <p>
            <b>Suoritin:</b> {pc.suoritin}
          </p>
          <p>
            <b>Valmistusvuosi:</b> {pc.valmistusvuosi}
          </p>
          <p>
            <b>Kiintolevy:</b> {pc.kiintolevy}
          </p>
          <p>
            <b>Värit:</b> {pc.värit.join(", ")}
          </p>
          <p>
            <b>Hinta:</b> {pc.hinta} €
          </p>
          <button onClick={() => addToCart(pc)}>Lisää ostoskoriin</button>
        </div>
      ))}
    </div>
  );
}
