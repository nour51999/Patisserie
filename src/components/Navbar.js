import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", backgroundColor: "pink" }}>
      <h1 style={{fontFamily:"cursive"}}>Nour Délice</h1>
      <div style={{fontFamily:"cursive",marginLeft:"86%",fontWeight:"bold",width:"10p%"}}>
        <Link to="/">Accueil</Link> | <Link to="/produits">Produits</Link> |{" "}
        <Link to="/panier">Panier</Link>
      </div>
    </nav>
    
  );
};

export default Navbar;
