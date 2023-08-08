import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import useProducts from "../hooks/useProducts";
//import { useNavigate } from "react-router-dom";
import Categories from "../components/Categories";
import Filter from "../components/Filter";

const Home = () => {
  //const navigate = useNavigate();
  const products = useProducts();
  const [filteredProducts, setFilteredProducts] = useState([]); //initially set all the products with no arrangements

  //to update the list of products on real time
  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  // Function to handle filter change
  const handleFilterChange = (filterOption) => {
    if (filterOption === "lowToHigh") {
      const sortedProducts = [...products].sort((a, b) => a.price - b.price);
      setFilteredProducts(sortedProducts);
    } else if (filterOption === "highToLow") {
      const sortedProducts = [...products].sort((a, b) => b.price - a.price);
      setFilteredProducts(sortedProducts);
    } else {
      setFilteredProducts(products);
    }
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <Categories />
        <Filter onFilterChange={handleFilterChange} />{" "}
        {/* Add the Filter component */}
      </div>
      <div className="row mt-5">
        {filteredProducts.map((product, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card position-relative">
              <img
                src={product.image}
                alt={product.name}
                className="card-img-top img-fluid"
                style={{ width: "100%", height: "200px" }}
              />
              <div
                className="stock-badge position-absolute "
                style={{
                  right: "10px",
                  top: "10px",
                  padding: "5px",
                  background: "yellow",
                }}
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
      </div>
    </div>
  );
};

export default Home;
