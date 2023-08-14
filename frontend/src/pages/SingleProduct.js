import React from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import useProducts from "../hooks/useProducts";

const SingleProduct = () => {
  const { productId } = useParams();
  const parsedProductId = parseInt(productId); // Convert to a number
  const product = useProducts().find(
    (product) => product.id === parsedProductId
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container">
      <div className="row mt-5 mb-5">
        <div className="col-md-6 order-md-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <hr></hr>
              <p className="card-text">Price: ${product.price}</p>
              <hr></hr>
              <p className="card-text">Stock: {product.stock}</p>
              <hr></hr>
              <p className="card-text">Description: {product.description}</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 order-md-1">
          <div className="card">
            <img
              src={product.image}
              alt={product.name}
              className="card-img-top"
              style={{ width: "100%", height: "300px" }} // Adjust the height as needed
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
