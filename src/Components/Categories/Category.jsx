import React, { useContext } from "react";
import { ProductContext } from "../ProductProvider/ProductProvider";
import "./Category.css";

const Category = () => {
  const {selectedcategory, setSelectedCategory } = useContext(ProductContext);
  return (
    <div className="container-div">
      <div className="heading">
        <p className="products-tittle">All products</p>
      </div>

      <div className="list-elements">
        <ul className="un-order">
          <li 
          className={`first ${selectedcategory === 'All' ? 'active' : ""}`}
          onClick={() => setSelectedCategory("All")}>
            All
          </li>
          <li
            className={`second ${selectedcategory === "men's clothing" ? 'active' : ""}`}
            onClick={() => setSelectedCategory("men's clothing")}
          >
            Men's clothing
          </li>
          <li
            className={`second ${selectedcategory === "jewelery" ? 'active' : ""}`}
            onClick={() => setSelectedCategory("jewelery")}
          >
            Jewelery
          </li>
          <li
            className={`second ${selectedcategory === "electronics" ? 'active' : ""}`}
            onClick={() => setSelectedCategory("electronics")}
          >
            Electronics
          </li>
          <li
            className={`second ${selectedcategory === "women's clothing" ? 'active' : ""}` }
            onClick={() => setSelectedCategory("women's clothing")}
          >
            Women's clothing
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Category;
