import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send data to a server
    console.log("Form data:", formData);
    // Clear form fields
    setFormData({
      name: "",
      email: "",
      description: "",
    });
  };

  return (
    <div className="container text-center">
      <h2 className="mt-5">Contact Us</h2>
      <p>
        If you have any questions or inquiries, please feel free to contact us.
        We'll be happy to assist you.
      </p>
      <form onSubmit={handleSubmit} className="form-contact-width mx-auto">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            required
          />
        </div>
        <div className="d-grid gap-2 d-md-block">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
      <div className="row mt-3">
        <div className="col-md-6">
          <h5>Phone:</h5>
          <p>+1 (123) 456-7890</p>
        </div>
        <div className="col-md-6">
          <h5>Email:</h5>
          <p>info@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
