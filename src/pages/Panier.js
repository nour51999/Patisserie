import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../features/cartSlice";

const Panier = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.prix * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h2 style={{ fontFamily: "cursive", textAlign: "center" }}>Votre Panier</h2>
      {cartItems.length === 0 ? (
        <p style={{ fontFamily: "cursive", fontWeight: "bold", textAlign: "center" }}>Votre panier est vide.</p>
      ) : (
        <div>
          <ul style={{ padding: 0, listStyleType: "none" }}>
            {cartItems.map((item) => (
              <li
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                }}
              >
                <div>
                  <strong>{item.nom}</strong> : {item.prix} DA x {item.quantity}
                </div>
                <button onClick={() => handleRemoveFromCart(item.id)} >
                  Supprimer
                </button>
              </li>
            ))}
          </ul>
          <div style={{ fontFamily: "cursive",textAlign:"center" }}>
          <p >Total : {total.toFixed(2)} DA</p>
          
          <button onClick={handleClearCart}  >
            Vider le panier
          </button>
          
          </div>
        </div>
      )}
    </div>
  );
};

export default Panier;
