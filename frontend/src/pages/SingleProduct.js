import React from "react";
import { useParams } from "react-router-dom"; // Import useParams from react-router-dom
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import useProducts from "../hooks/useProducts";

const SingleProduct = () => {
  const { productId } = useParams(); // Get the productId from the URL
  const product = useProducts().find((product) => product.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container">
      <div className="row mt-5">{/* Render product details */}</div>
    </div>
  );
};

export default SingleProduct;
