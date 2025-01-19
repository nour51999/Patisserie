

 import React from "react";
 
 
 import lmImage from '../assets/lm.jpeg';
 import oo from '../assets/oo.jpeg';
 import pat from '../assets/pat.jpeg';
 import tc from '../assets/tc.jpeg';
 import mp from '../assets/mp.png';
 import sou from '../assets/sou.jpeg';
import br from '../assets/br.png';
 import mill from '../assets/mill.jpeg';
 import { useDispatch } from "react-redux";
 import { addToCart } from "../features/cartSlice";

 const produits = [
 
  
  
    { id: 1, nom: "Croissant", prix: 30 , image: lmImage  },
  { id: 2, nom: "Tarte a la fraise", prix:100, image: oo },
  { id: 3, nom: "Pizza", prix: 40, image: mp }, 
  { id: 4, nom: "  Brioche", prix: 50, image: br },
  { id: 5, nom: "Mille Feuille", prix: 50, image:mill },
  { id: 6, nom: "Souflet", prix: 70, image:sou },
  { id: 7, nom: "patisserie", prix: 100, image:pat },
  { id: 8, nom: "tarte au citron", prix: 100, image:tc },
  
  
 ];

const Produits = () => {
  const dispatch = useDispatch();

 const handleAddToCart = (produit) => {
    dispatch(addToCart(produit));}
  return (
    <div style={{ padding: "20px" }}>
         <h2 style={{fontFamily:"cursive",marginLeft:"600px"}}>Nos Produits</h2>
    <div className="container">
      <div className="row">
        {produits.map((produit) => (
          <div key={produit.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card h-100">
              <img
                src={produit.image}
                className="card-img-top"
                alt={produit.nom}
                style={{ width: "150px", height: "150px",marginLeft:"50px"  }}
              />
              <div className="card-body">
                <h5 className="card-title">{produit.nom}</h5>
                <p className="card-text">Prix : {produit.prix} DA</p>
                <button onClick={() => handleAddToCart(produit)} >
              Ajouter au panier
            </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Produits;

