import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import useCategories from "../hooks/useCategories";

const Categories = () => {
  const categories = useCategories();
  return (
    <div className="container">
      <div className="row mt-5">
        {categories.map((category) => (
          <div key={category.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{category.name}</h5>
                <Link
                  to={`/category/${category.id}`}
                  className="btn btn-primary"
                >
                  View Products
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
