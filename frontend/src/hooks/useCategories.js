import { useState, useEffect } from "react";

const useCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/categories/") // Update the URL
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return categories;
};

export default useCategories;
