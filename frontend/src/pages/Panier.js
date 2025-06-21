import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../features/cartSlice";
import Ticket from "../components/Ticket";
const Panier = () => {
  const dispatch = useDispatch();
  const panier = useSelector((state) => state.cart.items);

  const total = panier.reduce(
    (sum, item) => sum + item.prix * item.quantity,
    0
  );

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClear = () => {
    dispatch(clearCart());
  };

  return (
    <div style={{ padding: "20px", fontFamily: "cursive" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>🛒 Votre Panier</h2>

      {panier.length === 0 ? (
        <p style={{ textAlign: "center" }}>Le panier est vide.</p>
      ) : (
        <div className="container">
          <div className="row">
            {panier.map((item) => (
              <div
                key={item.id}
                className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
              >
                <div className="card h-100">
                  
                  <div className="card-body">
                    <h5 className="card-title">{item.nom}</h5>
                    <p className="card-text">Prix : {item.prix} DA</p>
                    <p className="card-text">Quantité : {item.quantity}</p>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="btn btn-danger"
                    >
                      Retirer
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h4>Total : {total} DA</h4>
            <button className="btn btn-warning mt-2" onClick={handleClear}>
              Vider le panier
            </button>
          </div>

          {/* Ticket d’achat */}
          <Ticket />
        </div>
      )}
    </div>
  );
};

export default Panier;
