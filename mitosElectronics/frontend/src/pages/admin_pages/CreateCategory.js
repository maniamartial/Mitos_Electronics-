import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CreateCategory = () => {
  const [categoryName, setCategoryName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const categoryData = {
      name: categoryName,
    };

    axios
      .post("http://127.0.0.1:8000/api/categories/create", categoryData)
      .then((response) => {
        console.log("Category created:", response.data);
        // Redirect to categories page after successful creation
        window.location.href = "/view_categories";
      })
      .catch((error) => {
        console.error("Error creating category:", error);
      });
  };

  return (
    <div className="container mt-4 text-center">
      <h2>
        <Link to="/admin" className="text-dark mr-5">
          <i className="text-warning fas fa-arrow-left mr-5"></i>
        </Link>
        Create Category
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label>Name:</label>
          <input
            type="text"
            className="form-control form-control-sm"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mb-3">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateCategory;
