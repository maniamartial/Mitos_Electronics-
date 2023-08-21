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

  // Function to delete a product
  const handleDelete = (productId) => {
    axios
      .delete(`http://127.0.0.1:8000/api/electronics/${productId}`)
      .then((response) => {
        console.log("Product deleted:", response.data);
        // Remove the deleted product from the list
        setProducts(products.filter((product) => product.id !== productId));
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };

  return (
    <div className="container mt-4 text-center">
      <h2>
        <Link to="/admin" className="text-dark mr-5">
          <i className="text-warning fas fa-arrow-left mr-5"></i>
        </Link>{" "}
        Products
      </h2>
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
                  onClick={() => handleDelete(product.id)}
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
