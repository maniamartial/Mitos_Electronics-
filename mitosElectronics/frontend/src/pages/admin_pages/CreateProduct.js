import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CreateProduct = () => {
  const [productData, setProductData] = useState({
    name: "",
    price: 0,
    description: "",
    stock: 0,
    category: "", // Category ID will be stored here
    image: null,
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch available categories
    axios.get("http://127.0.0.1:8000/api/categories/").then((response) => {
      setCategories(response.data);
    });
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProductData({ ...productData, image: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", productData.name);
    formData.append("price", productData.price);
    formData.append("description", productData.description);
    formData.append("stock", productData.stock);
    formData.append("category", productData.category);
    formData.append("image", productData.image);

    // Post the product data to the server
    axios
      .post("http://127.0.0.1:8000/api/electronics/create/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("Product created:", response.data);
        // Redirect to products page after successful creation
        window.location.href = "/view_products";
      })
      .catch((error) => {
        console.error("Error creating product:", error);
      });
  };

  return (
    <div className="container mt-4 text-center">
      <h2>
        <Link to="/admin" className="text-dark mr-5">
          <i className="text-warning fas fa-arrow-left mr-5"></i>
        </Link>{" "}
        Create Product
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            value={productData.name}
            onChange={(e) =>
              setProductData({ ...productData, name: e.target.value })
            }
            required
          />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input
            type="number"
            className="form-control"
            value={productData.price}
            onChange={(e) =>
              setProductData({ ...productData, price: e.target.value })
            }
            required
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            className="form-control"
            value={productData.description}
            onChange={(e) =>
              setProductData({ ...productData, description: e.target.value })
            }
            required
          />
        </div>
        <div className="form-group">
          <label>Stock:</label>
          <input
            type="number"
            className="form-control"
            value={productData.stock}
            onChange={(e) =>
              setProductData({ ...productData, stock: e.target.value })
            }
            required
          />
        </div>
        <div className="form-group">
          <label>Category:</label>
          <select
            className="form-control"
            value={productData.category}
            onChange={(e) =>
              setProductData({ ...productData, category: e.target.value })
            }
            required
          >
            <option value="" disabled>
              Select a category
            </option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Image:</label>
          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
