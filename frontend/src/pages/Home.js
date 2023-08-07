import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import useProducts from "../hooks/useProducts";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  const products = useProducts();
  return (
    <div className="container ">
      <div className="row mt-5">
        {products.map((product, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card position-relative">
              <img
                src={product.image}
                alt={product.name}
                className="card-img-top img-fluid"
                style={{ width: "100%", height: "200px" }}
              />
              <div
                className="stock-badge position-absolute bg-success"
                style={{ right: "10px", top: "10px", padding: "5px" }}
              >
                {product.stock}
              </div>
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price}</p>
              </div>
            </div>
          </div>
        ))}
        {/* <button
          onClick={() => navigate("order-items")}
          className="btn bg-primary"
        >
          Place Order
        </button> */}
      </div>
    </div>
  );
};

export default Home;
