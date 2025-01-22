import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
// import ContextApi from "./ContextApi";
import CardComponent from "./Components/Card/CardComponent";
import Category from "./Components/Categories/Category.jsx";

function App() {

  return (
    <>
      <Navbar />
      <Category />
      {/* <ContextApi /> */}
    </>
  );
}

export default App;
