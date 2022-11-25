import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListProduct = () => {
  // inisialisasi properties
  const [products, setProducts] = useState([]); // diawal masih kosong

  // function untuk menampilkan seluruh data products
  const getAllProducts = async () => {
    await axios
      .get("http://localhost:5001/products")
      .then((response) => {
        console.log(response.data);
        setProducts(response.data); // mengisi product dengannilai dari response.data
      })
      .catch((error) => {
        console.log(">> Error while getting product list", error);
      });
  };

  const deleteProduct = async (id)=> {
    await axios.delete(`http://localhost:5001/products/${id}`)
    .then ((response) => {
        console.log({message : ">> Success to delete product", response});
        alert("Succes to delete product");
        getAllProducts(); 
    })
    .catch((error) => {
        console.log(">> Error to delete product");
    });
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  /*
    # useEffect
      > Regular useEffect : dirender ketika ada perubahan apapun
      > Empty array : dirender satu kali saja diawal
      > Value array : dirender satu kali ketika terjadi perubahan pada value
  */

  // membuat tampilan
  return (
      <div className="container py-3 px-3">
          <h3 className="h3">All Product</h3>
          <hr />
          <Link to="/createproduct" className="btn btn-md btn-primary mb-5">Add New Product</Link>
          <table className="table table-bordered table-hover table-striped">
              <thead>
                  <tr>
                      <th>No.</th>
                      <th>Product Name</th>
                      <th>Product Price</th>
                      <th>Option</th>
                  </tr>
              </thead>
              <tbody>
                {
                    products.map((product, index) => (
                        <tr key={product.id}>
                            <td>{index +1}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>
                                <Link to={`/editproduct/${product.id}`} className="btn btn-sm btn-outline-info">Edit</Link> 
                                &nbsp;
                                <button className="btn btn-sm btn-outline-danger" 
                                    onClick={() => {
                                        if(window.confirm("Are you sure to delete")){
                                            deleteProduct(product.id);
                                        }
                                    }}
                                >Delete</button>
                            </td>
                        </tr>
                    ))
                }
              </tbody>
          </table>
      </div>
  );
};


export default ListProduct;
