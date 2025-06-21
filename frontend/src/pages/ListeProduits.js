
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { Link } from "react-router-dom";

const ListeProduits = () => {
  const [produits, setProduits] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/products")
      .then(res => setProduits(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      
    
      {/* <h2>🍰 Nos Produits <button type="submit" style={{ marginLeft:"60%" }} > 🛒 Nouveau Produit </button></h2> */}
      <h2 >🍰 Nos Produits     <button style={{ marginLeft:"60%" , 
    }}> <Link to="/ajouterproduit" >🛒 Nouveau Produit </Link></button></h2>
      <div className="row">
      
        {produits.map((produit) => (
          <div key={produit.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
              <img
                src={`http://127.0.0.1:8000/storage/images/${produit.image}`}
                className="card-img-top"
                alt={produit.nom}
                style={{ width: "150px", height: "150px", objectFit: "cover", margin: "auto" }}
              />
              <div className="card-body text-center">
                <h5>{produit.nom}</h5>
                <p>{produit.prix} DA</p>
                <button onClick={() => dispatch(addToCart(produit))} style={{  backgroundColor: "#e91e63",
    color: "white",
    padding: "12px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px",
    marginTop: "10px",
    transition: "background 0.3s", }}>
                  🛒 Ajouter au Panier
                </button>
               
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListeProduits;
