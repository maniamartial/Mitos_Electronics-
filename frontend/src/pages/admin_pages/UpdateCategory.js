import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const UpdateCategory = () => {
  const { id } = useParams();
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    // Fetch the category details using the ID
    axios
      .get(`http://127.0.0.1:8000/api/categories/${id}/`)
      .then((response) => {
        setCategoryName(response.data.name);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const categoryData = {
      name: categoryName,
    };

    axios
      .put(`http://127.0.0.1:8000/api/categories/${id}/`, categoryData)
      .then((response) => {
        console.log("Category updated:", response.data);
        // Redirect to categories page after successful update
        window.location.href = "/view_categories";
      })
      .catch((error) => {
        console.error("Error updating category:", error);
      });
  };

  return (
    <div className="container mt-4 text-center">
      <h2>Update Category</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mb-5 mt-2">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateCategory;
