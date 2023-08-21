import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// Import Font Awesome CSS
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="text-dark py-4"
      style={{
        background: "#50C878",
        fontFamily: "Barlow",
        fontWeight: "Bold",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Contact Us</h5>
            <p>Email: info@mitos.com</p>
            <p>Phone: (123) 456-7890</p>
            <p>Address: 1234 Nairobi, Kenya</p>
          </div>
          <div className="col-md-6">
            <h5>Follow Us</h5>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#">
                  <i
                    className="fab fa-facebook"
                    style={{ color: "yellow" }}
                  ></i>{" "}
                  {/* Replace with Font Awesome icon */}
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-twitter" style={{ color: "yellow" }}></i>{" "}
                  {/* Replace with Font Awesome icon */}
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i
                    className="fab fa-instagram"
                    style={{ color: "yellow" }}
                  ></i>{" "}
                  {/* Replace with Font Awesome icon */}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-3">
        <p>
          <Link to="/login">&copy; {new Date().getFullYear()} </Link> Your
          Ecommerce Store. All rights reserved.
        </p>
        <p>
          Created by <a href="https://techmaniacc.netlify.app/">Techmaniacc</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
