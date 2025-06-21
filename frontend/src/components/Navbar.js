import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", backgroundColor: "pink" }}>
      <h1 style={{fontFamily:"cursive"}}>Nour Délice</h1>
      <div style={{fontFamily:"cursive",marginLeft:"70%",fontWeight:"bold",width:"10p%"}}>
        <Link to="/">Accueil</Link> | <Link to="/listeproduits">ListeProduits</Link> |{" "}
        <Link to="/panier">Panier | </Link>
        <Link to="/ajouterproduit">AjouterProduit</Link>
      </div>
    </nav>
    
  );
};

export default Navbar;
