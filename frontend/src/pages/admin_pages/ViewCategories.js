import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ViewCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch all categories
    axios.get("http://127.0.0.1:8000/api/categories/").then((response) => {
      setCategories(response.data);
    });
  }, []);

  // Function to delete a category
  const handleDelete = (categoryId) => {
    axios
      .delete(`http://127.0.0.1:8000/api/categories/${categoryId}`)
      .then((response) => {
        console.log("Category deleted:", response.data);
        // Remove the deleted category from the list
        setCategories(
          categories.filter((category) => category.id !== categoryId)
        );
      })
      .catch((error) => {
        console.error("Error deleting category:", error);
      });
  };

  return (
    <div className="container mt-4 text-center">
      <h2>Categories</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td>{category.name}</td>
              <td>
                <Link
                  to={`/update-category/${category.id}`}
                  className="btn btn-primary btn-sm mr-2"
                >
                  Update
                </Link>{" "}
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(category.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/create-category" className="btn btn-success mb-3">
        Create Category
      </Link>
    </div>
  );
};

export default ViewCategories;
