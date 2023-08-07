import React from "react";
import { useParams } from "react-router-dom"; // Import useParams from react-router-dom
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import useProducts from "../hooks/useProducts";

const CategoryProducts = () => {
  const { categoryId } = useParams(); // Get the categoryId from the URL
  const products = useProducts().filter(
    (product) => product.category === categoryId
  );

  return (
    <div className="container">
      <div className="row mt-5">
        {products.map((product) => (
          <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            {/* Render product card */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
