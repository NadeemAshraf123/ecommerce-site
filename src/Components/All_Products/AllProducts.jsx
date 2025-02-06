import React, { useEffect, useState,useContext } from "react";
import { ProductContext } from "../ProductProvider/ProductProvider";
import CardComponent from "../../Components/Card/CardComponent";
import './AllProducts.css'


const AllProducts = () => {

  const {selectedcategory } = useContext(ProductContext);  
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    // Filter products based on the selected category
    if (selectedcategory  === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.category.toLowerCase() === selectedcategory.toLowerCase() )
      );
    }
  }, [selectedcategory , products]);

  return (
    <div className="card-container">
      {filteredProducts?.map((product) => (
        <CardComponent
          key={product.id}
          title={product.title}
          image={product.image}
          price={product.price}
          description={product.description}
        />
      ))}
    </div>
  );
};

export default AllProducts;
