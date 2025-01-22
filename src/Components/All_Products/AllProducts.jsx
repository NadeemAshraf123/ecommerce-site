import React, {useEffect, useState} from 'react'


const AllProducts = () => {
      const [products, setProducts] = useState([]);
    

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then((response) => (response.json()))
        .then((data) => setProducts(data))
        .catch((error) => console.error(error))
    },[]);

  return (
      <div className="card-container">
        {products?.map((product) => (
          <CardComponent
            key={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            description={product.description}
          />
        ))}
        
        
      </div>
  )
}

export default AllProducts
