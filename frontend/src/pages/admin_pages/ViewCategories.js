import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ViewCategories = () => {
  const [categories, setCategories] = useState([]);
  const [categoryIdToDelete, setCategoryIdToDelete] = useState(null);

  useEffect(() => {
    // Fetch all categories
    axios.get("http://127.0.0.1:8000/api/categories/").then((response) => {
      setCategories(response.data);
    });
  }, []);

  const handleDelete = (categoryId) => {
    setCategoryIdToDelete(categoryId);
    console.log(categoryId);
  };

  const confirmDelete = () => {
    if (categoryIdToDelete) {
      axios
        .delete(`http://127.0.0.1:8000/api/categories/${categoryIdToDelete}`)
        .then((response) => {
          console.log("Category deleted:", response.data);
          // Refresh categories after successful deletion
          setCategories(
            categories.filter((category) => category.id !== categoryIdToDelete)
          );
          // Reset categoryIdToDelete
          setCategoryIdToDelete(null);
        })
        .catch((error) => {
          console.error("Error deleting category:", error);
        });
    }
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
                  className="btn btn-danger btn-sm ml-2"
                  data-toggle="modal"
                  data-target="#deleteModal"
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

      {/* Delete Modal */}
      <div
        className="modal fade"
        id="deleteModal"
        tabIndex="-1"
        aria-labelledby="deleteModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="deleteModalLabel">
                Confirm Deletion
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              Are you sure you want to delete this category?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={confirmDelete}
                data-dismiss="modal"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCategories;
