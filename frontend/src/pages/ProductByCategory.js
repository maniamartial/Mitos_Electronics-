import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import useProducts from "../hooks/useProducts";

const ProductsByCategory = () => {
  const { categoryId } = useParams();
  const [categoryName, setCategoryName] = useState("");
  const products = useProducts();
  const [filterOption, setFilterOption] = useState("none"); // State for filter option
  const [filteredProducts, setFilteredProducts] = useState([]); // State for filtered products

  // Fetch the category name based on the categoryId
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/categories/${categoryId}/`)
      .then((response) => response.json())
      .then((data) => setCategoryName(data.name))
      .catch((error) => console.error("Error fetching category name:", error));
  }, [categoryId]);

  // Filter products based on the categoryId
  const categoryProducts = products.filter(
    (product) => product.category === parseInt(categoryId)
  );

  // Apply filter based on selected option
  useEffect(() => {
    if (filterOption === "lowToHigh") {
      const sortedProducts = [...categoryProducts].sort(
        (a, b) => a.price - b.price
      );
      setFilteredProducts(sortedProducts);
    } else if (filterOption === "highToLow") {
      const sortedProducts = [...categoryProducts].sort(
        (a, b) => b.price - a.price
      );
      setFilteredProducts(sortedProducts);
    } else {
      setFilteredProducts(categoryProducts);
    }
  }, [filterOption, categoryProducts]);

  return (
    <div className="container">
      <h2 className="text-center mt-5">{categoryName}</h2>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5>Filter by Price:</h5>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="filterOptions"
            id="lowToHigh"
            value="lowToHigh"
            checked={filterOption === "lowToHigh"}
            onChange={() => setFilterOption("lowToHigh")}
          />
          <label className="form-check-label" htmlFor="lowToHigh">
            Low to High
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="filterOptions"
            id="highToLow"
            value="highToLow"
            checked={filterOption === "highToLow"}
            onChange={() => setFilterOption("highToLow")}
          />
          <label className="form-check-label" htmlFor="highToLow">
            High to Low
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="filterOptions"
            id="none"
            value="none"
            checked={filterOption === "none"}
            onChange={() => setFilterOption("none")}
          />
          <label className="form-check-label" htmlFor="none">
            No Filter
          </label>
        </div>
      </div>
      <div className="row mt-3">
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
                className="stock-badge position-absolute"
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

export default ProductsByCategory;
