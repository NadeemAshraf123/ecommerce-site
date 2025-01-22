import React, {createContext, useState} from 'react'

export const ProductContext = createContext();

const ProductProvider = ({children}) => {

  const [selectedCategory, setselectedCategory] = useState("All");

  return (
    <ProductContext.Provider value={{selectedCategory, setselectedCategory}}>
        <children />

    </ProductContext.Provider>
  )
}

export default ProductProvider
