import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Accueil from "./pages/Accueil";
import Produits from "./pages/Produits";

import 'bootstrap/dist/css/bootstrap.min.css'
import Panier from "./pages/Panier";
import GlobalStyle from "./styles/GlobalStyle";

const App = () => {
  return (

    

   
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/produits" element={<Produits />} />
        <Route path="/panier" element={<Panier />} />
      </Routes>
      <>
      <GlobalStyle />
      {/* Le reste du code */}
    </>
      <Footer />
      
      {/* <Outlet /> */}
    </Router>
   
  );
 
  
};

export default App;
