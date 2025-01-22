import React from 'react';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import './Navbar.css'; // Importing custom CSS

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-top">
        <p className="navbar-brand-store">Store</p>
        <div className="navbar-icons">
          <a className="icon-link-search">
            <FaSearch size={20} />
          </a>
          <a className="icon-link-cart">
            <FaShoppingCart size={20} />
          </a>
        </div>
      </div>
      </div>
    
  );
};

export default Navbar;
