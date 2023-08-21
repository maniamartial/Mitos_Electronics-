import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { useNavigate } from "react-router-dom";
const PlaceOrder = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("creditCard");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission of the order, e.g., send data to the server
    // You can use the state variables (name, address, paymentMethod) here
    console.log("Order submitted:", { name, address, paymentMethod });
  };

  return (
    <div className="container mt-5">
      <h2>Place Your Order</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Shipping Address
          </label>
          <textarea
            className="form-control"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            rows="3"
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="paymentMethod" className="form-label">
            Payment Method
          </label>
          <select
            className="form-select"
            id="paymentMethod"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
          >
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bankTransfer">Bank Transfer</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary mr-3">
          Place Order
        </button>
      </form>
      <button
        onClick={() => navigate(-1)}
        className="btn btn-secondary mt-2 mb-2"
      >
        Place Order
      </button>
    </div>
  );
};

export default PlaceOrder;
