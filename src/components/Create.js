import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Create() {
  const [values, setValues] = useState({
    name: "",
    description: "",
    quantity: "",
    price: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/products", values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div
      className="d-flex w-100 justify-content-center align-items-center bg-light"
      style={{ marginTop: "50px", height: "75vh" }}
    >
      <div className="w-50 border bg-white shadow p-5 rounded px-5 pt-3">
        <h1 className="text-center text-success">Ajouter produit</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="name">Nom :</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Entrez le nom du produit"
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="name">Description :</label>
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="Entrez la description"
              onChange={(e) =>
                setValues({ ...values, description: e.target.value })
              }
            />
          </div>
          <div className="mb-2">
            <label htmlFor="name">Quantité :</label>
            <input
              type="number"
              name="quantity"
              className="form-control"
              placeholder="Entrez la quantité"
              onChange={(e) =>
                setValues({ ...values, quantity: e.target.value })
              }
            />
          </div>
          <div className="mb-2">
            <label htmlFor="price">Prix :</label>
            <input
              type="number"
              name="price"
              className="form-control"
              placeholder="Entrez le prix"
              onChange={(e) => setValues({ ...values, price: e.target.value })}
            />
          </div>
          <div className="mb-2" style={{ marginTop: "20px" }}>
            <button className="btn btn-primary">Ajouter</button>
            <Link to="/" className="btn btn-danger ms-3">
              Annuler
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Create;
