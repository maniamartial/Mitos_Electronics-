import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Contact Us</h5>
            <p>Email: info@example.com</p>
            <p>Phone: (123) 456-7890</p>
            <p>Address: 1234 Main St, City, Country</p>
          </div>
          <div className="col-md-6">
            <h5>Follow Us</h5>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#">Facebook</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Twitter</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-3">
        <p>
          &copy; {new Date().getFullYear()} Your Ecommerce Store. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
