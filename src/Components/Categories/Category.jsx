import React from "react";
import "./Category.css";

const Category = () => {
  return (
    <div className="container-div">
      <div className="heading">
        <p className="products-tittle">All products</p>
      </div>

      <div className="list-elements">
        <ul className="un-order">
          <li className="first">All</li>
          <li className="second">Men's clothing</li>
          <li className="second">Jewelery</li>
          <li className="second">Electronics</li>
          <li className="second">Women's clothing</li>
        </ul>
      </div>
    </div>
  );
};

export default Category;
