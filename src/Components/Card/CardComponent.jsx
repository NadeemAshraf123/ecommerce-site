import React, {useContext, useState } from "react";
import { ProductContext } from '../ProductProvider/ProductProvider';
import "./CardComponent.css";

const CardComponent = ({id, title, image, price, description }) => {

  const {addToCart} = useContext(ProductContext);
  const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = () => {
      addToCart({id, title, image, price, description });
      setIsAdded(true);

    
    setTimeout(() => {
      setIsAdded(false);
    }, 4000);

  };

  return (
    <>
      <div className="product-card">
        <img src={image} alt={title} className="product-image" />
        <h3 className="product-heading">{title}</h3>
        <p className="product-description">{description}</p>
        <hr className="product-divider" />
        <p className="product-price">
          <strong>PLN:</strong> {price}
        </p>
        
      <button
        className={`add-to-cart-btn ${isAdded ? "added" : ""}`}
        onClick={handleAddToCart}
      >
        {isAdded ? "Added" : "Add to Cart"}
      </button>
      </div>
    </>
  );
};
export default CardComponent;
