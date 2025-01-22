import React from 'react'
import { useEffect , useState } from "react";

const Api = () => {

    const [data, setData] = useState([]);

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products").then((result)=>{
      result.json().then((resp)=>{
        // console.warn("result", resp)
        setData(resp);
      })
    })
  },[]);
  console.warn(data);

  return (
    <div>
              <table border='1px'>
        <tr>
          <td>id</td>
          <td>heading</td>
          <td>description</td>
          <td>image</td>
          <td>price</td>
        </tr>
        {
          data.map((item)=>
            <tr>
          <td>{item.id}</td>
          <td>{item.category}</td>
          <td>{item.description}</td>
          <td>{item.image}</td>
          <td>{item.price}</td>
        </tr>
          )
        }
      </table>
      
    </div>
  )
}

export default Api
