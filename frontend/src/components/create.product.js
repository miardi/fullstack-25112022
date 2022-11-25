import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CrateProduct = () => {
  //mendeklarasikan properties => name, price, description
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const saveProduct = async (event) => {
    event.preventDefault(); //menghindari adanya reload
    const response = await axios
      .post("http://localhost:5001/products", {
        name: name,
        price: price,
        description: description,
      })
      .then((response) => {
        console.log({ message: ">> Success to create new product", response });
        alert("Success to create new product");
        navigate("/"); //redirect ke halaman paling depan
      })
      .catch((error) => {
        console.log(">> Error while creating new product", error);
      });
  };

  return (
    <div className="container py-3 px-3">
      <h3 className="h3">Create New Product</h3>
      <hr className="mb-5" />
      <form onSubmit={saveProduct}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            autoComplete="off"
            className="form-control"
            id="name"
            placeholder="Enter Name of Product"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Product Price
          </label>
          <input
            type="number"
            autoComplete="off"
            className="form-control"
            id="price"
            placeholder="Enter Price of Product"
            required
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Product Description
          </label>
          <input
            type="text"
            autoComplete="off"
            className="form-control"
            id="description"
            placeholder="Enter Product  Description"
            required
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <button className="btn btn-md btn-primary">
            Create Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default CrateProduct;
