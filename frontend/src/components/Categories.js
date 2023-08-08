import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import useCategories from "../hooks/useCategories";

const Categories = () => {
  const categories = useCategories();

  const handleCategoryChange = (event) => {
    const categoryId = event.target.value;
    if (categoryId) {
      // Redirect to the ProductsByCategory page with the selected category ID
      window.location.href = `/product-by-category/${categoryId}`;
    }
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="">
          <h5>Choose Category</h5>
          <select className="form-select" onChange={handleCategoryChange}>
            <option value="">Select a Category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Categories;
