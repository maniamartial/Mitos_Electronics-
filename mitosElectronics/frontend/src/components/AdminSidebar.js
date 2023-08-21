import React from "react";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div
      className="sidebar d-flex flex-column bg-success min-vh-100 p-4"
      style={{ width: "10%", minWidth: "200px" }}
    >
      <Link to="/admin" className="text-dark mt-3 text-decoration-none">
        <i className="text-warning fas fa-tachometer-alt"></i> Dashboard
      </Link>
      <Link to="/view_products" className="text-dark mt-3 text-decoration-none">
        <i className="text-warning fas fa-box-open"></i> View Products
      </Link>
      <Link
        to="/create-product"
        className="text-dark mt-3 text-decoration-none"
      >
        <i className="text-warning fas fa-plus-square"></i> Create Product
      </Link>
      <Link
        to="/view_categories"
        className="text-dark mt-3 text-decoration-none"
      >
        <i className="text-warning fas fa-list"></i> View Categories
      </Link>
      <Link
        to="/create-category"
        className="text-dark mt-3 text-decoration-none"
      >
        <i className="text-warning fas fa-plus-circle"></i> Create Category
      </Link>
    </div>
  );
};

export default AdminSidebar;
