import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Update() {
  /* const [data, setData] = useState([]); */

  const { id } = useParams();

  const [values, setValues] = useState({
    name: "",
    description: "",
    quantity: "",
    price: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/products/" + id)
      .then((res) => setValues(res.data))
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3001/products/" + id, values)
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
        <h1 className="text-center text-success">Mettre à jour le produit</h1>
        <form onSubmit={handleUpdate}>
          <div className="mb-2">
            <label htmlFor="name">Nom :</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Entrez le nom du produit"
              value={values.name}
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
              value={values.description}
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
              value={values.quantity}
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
              value={values.price}
              onChange={(e) => setValues({ ...values, price: e.target.value })}
            />
          </div>
          <div className="mb-2" style={{ marginTop: "20px" }}>
            <button className="btn btn-primary">Mettre à jour</button>
            <Link to="/" className="btn btn-danger ms-3">
              Annuler
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Update;
