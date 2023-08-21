import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const AboutUs = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2>About Us</h2>
          <p>
            Welcome to Our Online Store! We are a passionate team dedicated to
            providing you with the best shopping experience. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Nunc et enim nec eros
            ultricies varius vel in libero. Praesent fermentum, diam id posuere
            tincidunt, ante odio bibendum dui, sed efficitur odio felis eget
            mauris.
          </p>
          <p>
            We offer a wide range of high-quality products at competitive
            prices. Our mission is to deliver exceptional value and customer
            satisfaction. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Nunc et enim nec eros ultricies varius vel in libero. Praesent
            fermentum, diam id posuere tincidunt, ante odio bibendum dui, sed
            efficitur odio felis eget mauris.
          </p>
          <p>
            Thank you for choosing us for all your shopping needs. Feel free to
            explore our website and discover amazing products. If you have any
            questions or feedback, don't hesitate to contact us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
