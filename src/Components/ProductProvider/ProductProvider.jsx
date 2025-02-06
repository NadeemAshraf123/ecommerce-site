import React, {createContext, useState} from 'react'

export const ProductContext = createContext();



const ProductProvider = ({children}) => {

  const [selectedcategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
          setCart((prevCart) => {
              const existingProduct = prevCart.find((item) => item.id === product.id);
              if (existingProduct) {
                return prevCart.map((item) => 
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
              } else {

              return [...prevCart, { ...product, quantity: 1}];
              }
          });
  };
  return (
    <ProductContext.Provider value={{selectedcategory, setSelectedCategory, cart, addToCart}}>
        {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider
