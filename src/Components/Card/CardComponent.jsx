import React from "react";
import "./CardComponent.css";

const CardComponent = ({ title, image, price, description }) => {
  return (
    <>
      {/* <div className="card-container"> */}
      <div className="product-card">
        <img
          src={image}
          alt={title}
          className="product-image"
        />
        <h3 className="product-heading">{title}</h3>
        <p className="product-description">{description}</p>
        <hr className="product-divider" />
        <p className="product-price">
          <strong>PLN:</strong> ${price}
        </p>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
      {/* </div> */}
    </>
  );
};
export default CardComponent;
