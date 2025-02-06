import React, {useRef, useContext, useState, useEffect} from 'react';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { ProductContext } from '../ProductProvider/ProductProvider';
import './Navbar.css'; 


const Navbar = () => {

  const [search, setSearch] = useState('');
  const [showSearchInput, setShowSearchInput] = useState(false);
  const searchInputRef = useRef(null);
  const { cart } = useContext(ProductContext);
  const navbarRef = useRef(null)
  const [showCartModal, setShowCartModal] = useState(false);


  const handleCartClick = () => {
    setShowCartModal(true);
  };
  const handleCloseCartModal = () => {
    setShowCartModal(false);
  };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {

    const navbarHeight = navbarRef.current.offsetHeight;
    document.body.style.paddingTop = `${navbarHeight}px`;
  }, []);

  const handleSearchClick = () => {
    setShowSearchInput(!showSearchInput);
  };

  const handleClickOutside = (event) => {

    console.log("Click detected outside", event);

    if (searchInputRef.current && !searchInputRef.current.contains(event.target)) {
      setShowSearchInput(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar-container" ref={navbarRef}>
      <div className="navbar-top">
        <p className="navbar-brand-store">Store</p>
        <div className="navbar-icons">
          <a href='#search' onClick={handleSearchClick} className="icon-link-search">
            < FaSearch size={20} />
          </a>
          <a href='cart' onClick={handleCartClick} className="icon-link-cart">
            <FaShoppingCart size={20} />
            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
            {/* {cart.length > 0 && <span className='cart-count' > {cart.length} </span>} */}
          </a>
        </div>
      </div>
      

      {showSearchInput && (
        <div className="search-input-container" ref={searchInputRef}>
        <input 
        type='text'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder='Search products...'
        />
        </div>
      )}


{showCartModal && (
        <div className="cart-modal">
          <div className="cart-modal-content">
            <h2>Your Cart</h2>
            <button onClick={handleCloseCartModal}>Close</button>
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  {item.title} - Quantity: {item.quantity}
                </li>
              ))}
            </ul>
      </div>
      </div>
      )};
    </div>
  );
};

export default Navbar;
