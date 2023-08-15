import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch all products
    axios.get("http://127.0.0.1:8000/api/electronics/").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div className="container mt-4 text-center">
      <h2>Products</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.stock}</td>
              <td>{product.price}</td>
              <td>
                <Link
                  to={`/update-product/${product.id}`}
                  className="btn btn-primary btn-sm mr-2"
                >
                  Update
                </Link>{" "}
                <button
                  className="btn btn-danger btn-sm"
                  // Implement delete functionality
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/create-product" className="btn btn-success mb-3">
        Create Product
      </Link>
    </div>
  );
};

export default ProductList;
