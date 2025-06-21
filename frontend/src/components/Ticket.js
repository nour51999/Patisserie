import React from "react";
import { useSelector } from "react-redux";

const Ticket = () => {
  const panier = useSelector((state) => state.cart.items);
  const total = panier.reduce((sum, item) => sum + item.prix * item.quantity, 0);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div style={{ padding: "20px", marginTop: "30px", border: "1px solid #ccc" }}>
      <h3 style={{ textAlign: "center" }}>🧾 Ticket d'achat</h3>
      <ul>
        {panier.map((item) => (
          <li key={item.id}>
            {item.nom} x {item.quantity} = {item.prix * item.quantity} DA
          </li>
        ))}
      </ul>
      <h4>Total : {total} DA</h4>
      <button onClick={handlePrint} style={{  backgroundColor: "#e91e63",
    color: "white",
    padding: "12px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px",
    marginTop: "10px",
    transition: "background 0.3s", }}>Imprimer</button>
    </div>
  );
};

export default Ticket;
