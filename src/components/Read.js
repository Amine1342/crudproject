import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Read() {
  const [data, setData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:3001/products/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="d-flex vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow pb-5 rounded px-5 pt-3">
        <h3 className="text-center text-success mb-3">Détails du produit</h3>
        <div className="mb-2 text-center">
          <strong>Nom : {data.name}</strong>
        </div>
        <div className="mb-2 text-center">
          <strong>Description : {data.description}</strong>
        </div>
        <div className="mb-2 text-center">
          <strong>Quantité : {data.quantity}</strong>
        </div>
        <div className="mb-2 text-center">
          <strong>Prix : {data.price}</strong>
        </div>
        <div className="text-center">
          <Link to={"/update/" + id} className="btn btn-success ms-3">
            Modifier
          </Link>
          <Link to={"/"} className="btn btn-danger ms-3">
            Retour
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Read;
