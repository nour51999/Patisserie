
import React, { useState } from "react";
import axios from "axios";

const AjouterProduit = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prix: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === "image" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("nom", formData.nom);
    data.append("prix", formData.prix);
    if (formData.image) {
      data.append("image", formData.image);
    }

    axios
      .post("http://127.0.0.1:8000/api/products", data)
      .then((res) => {
        alert("✅ Produit ajouté avec succès !");
        setFormData({ nom: "", prix: "", image: null });
      })
      .catch((err) => {
        alert("❌ Erreur !");
        console.error(err);
      });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>➕ Ajouter un Produit</h2>

      <form onSubmit={handleSubmit} encType="multipart/form-data" style={styles.form}>
        <label style={styles.label}>Nom :</label>
        <input
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          placeholder="Ex: Mille-feuille"
          required
          style={styles.input}
        />

        <label style={styles.label}>Prix :</label>
        <input
          name="prix"
          type="number"
          value={formData.prix}
          onChange={handleChange}
          placeholder="Ex: 100"
          required
          style={styles.input}
        />

        <label style={styles.label}>Image :</label>
        <input
          name="image"
          type="file"
          accept="image/*"
          onChange={handleChange}
          style={styles.inputFile}
        />

        <button type="submit" style={styles.button}>
          Enregistrer
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: "30px",
    background: "#fff5f8",
    maxWidth: "500px",
    margin: "40px auto",
    borderRadius: "15px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    fontFamily: "cursive",
  },
  title: {
    textAlign: "center",
    color: "#e91e63",
    marginBottom: "25px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  label: {
    fontWeight: "bold",
    color: "#333",
  },
  input: {
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontSize: "16px",
  },
  inputFile: {
    fontSize: "14px",
  },
  button: {
    backgroundColor: "#e91e63",
    color: "white",
    padding: "12px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px",
    marginTop: "10px",
    transition: "background 0.3s",
  },
};

export default AjouterProduit;
