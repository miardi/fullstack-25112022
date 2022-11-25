import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  //mendeklarasikan properties => name, price, description
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  // Mendapatkan product dengan id tertentu
  const getProductById = async () => {
    await axios
      .get(`http://localhost:5001/products/${id}`)
      .then((response) => {
        console.log({
          message: `>> Getting data from product with id : ${id}`,
          response,
        });
        setName(response.data.name);
        setPrice(response.data.price);
        setDescription(response.data.description);
      })
      .catch((error) => {
        console.log(">> Error while getting product", error);
      });
  };

  useEffect(() => {
    getProductById();
  }, []);

  // Proses mengubah data product dengan id tertentu
  const updateProduct = async (event) => {
    event.preventDefault(); // menghindarai reload yang berasal dari button
    await axios
      .patch(`http://localhost:5001/products/${id}`, {
        name: name,
        price: price,
        description: description,
      })
      .then((response) => {
        console.log({
          message: `>> Updating data product with id : ${id}`,
          response,
        });
        alert("Succes to update product");
        navigate("/"); //redirect ke halaman paling depan
      })
      .catch((error) => {
        console.log(">> Error while updating product", error);
      });
  };

  return (
    <div className="container py-3 px-3">
      <h3 className="h3">Create New Product</h3>
      <hr className="mb-5" />
      <form onSubmit={updateProduct}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Product Name
          </label>
          <input
            type="text"
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
            className="form-control"
            id="description"
            placeholder="Enter Product  Description"
            required
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <button className="btn btn-md btn-primary">Update Product</button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
