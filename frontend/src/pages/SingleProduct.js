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
      <div className="row mt-5">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <img
              src={product.image}
              alt={product.name}
              className="card-img-top"
              style={{ width: "100%", height: "auto" }}
            />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">Price: ${product.price}</p>
              <p className="card-text">Stock: {product.stock}</p>

              <p className="card-text">Ddescription: {product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
