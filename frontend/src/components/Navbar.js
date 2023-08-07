import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
// Import your custom CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Mitos
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                id="accountDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Account
              </Link>
              <div className="dropdown-menu" aria-labelledby="accountDropdown">
                <Link className="dropdown-item" to="/login">
                  Login
                </Link>
                <Link className="dropdown-item" to="/register">
                  Register
                </Link>
                <Link className="dropdown-item" to="/profile">
                  Profile
                </Link>
              </div>
            </li>
          </ul>
        </div>
        <div className="cart">
          <i className="fas fa-shopping-cart"></i>
          <span className="cart-count">0</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
