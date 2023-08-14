import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

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
