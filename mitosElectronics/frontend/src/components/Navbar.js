import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Import the useAuth hook

import "../assets/css/header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from "../images/logo.png";

const Navbar = () => {
  const { user, logout } = useAuth(); // Use the user state and logout function

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ background: "#50C878" }}
    >
      <div
        className="container"
        style={{ color: "black", fontFamily: "Barlow", fontWeight: "Bold" }}
      >
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="Logo"
            style={{ height: "auto", width: "100px" }}
          />
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
              <Link className="nav-link black-link" to="/">
                Home
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
                {user ? (
                  <>
                    <p className="dropdown-item">Welcome, {user.username}</p>
                    <Link className="dropdown-item" to="/profile">
                      Profile
                    </Link>
                    <button className="dropdown-item" onClick={logout}>
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link className="dropdown-item" to="/login">
                      Login
                    </Link>
                    <Link className="dropdown-item" to="/register">
                      Register
                    </Link>
                  </>
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
