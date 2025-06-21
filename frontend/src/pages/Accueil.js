import React from "react";
import ph from '../assets/ph.jpg';
import poo from '../assets/poo.jpg';
import tt from '../assets/tt.jpg';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';/// avoir une autorisation d'utiliser Java 

const Accueil = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{fontFamily:"cursive"}}>Bienvenue chez Nour Délice !</h2>
      <p style={{fontFamily:"cursive"}}>Découvrez nos délicieuses pâtisseries faites maison.</p>
      <div id="carouselExampleRide" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={ph} className="d-block w-100" alt="Image 1" />
    </div>
    <div className="carousel-item">
      <img src={poo} className="d-block w-100" alt="Image 2" />
    </div>
    <div className="carousel-item">
      <img src={tt} className="d-block w-100" alt="Image 3" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


    </div>
      
        
  );
};


export default Accueil;
