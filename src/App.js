import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Category from "./Components/Categories/Category.jsx";
import AllProducts from "./Components/All_Products/AllProducts.jsx";
import ProductProvider from './Components/ProductProvider/ProductProvider';



function App() {

  return (
    <>
    <ProductProvider>
      <Navbar />
      <Category />
      <AllProducts />
      </ProductProvider>
      {/* <ContextApi /> */}
    </>
  );
}

export default App;
