import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Import the useAuth hook

const AdminNavbar = () => {
  const { user, logout } = useAuth(); // Use the user state and logout function

  return (
    <nav>
      <ul>
        <li>
          <Link to="/admin/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/view-products">View Products</Link>
        </li>
        <li>
          <Link to="/admin/create-product">Create Product</Link>
        </li>
        <li>
          <Link to="/admin/view-categories">View Categories</Link>
        </li>
        <li>
          <Link to="/admin/create-category">Create Category</Link>
        </li>
        <li>
          <button onClick={logout}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
