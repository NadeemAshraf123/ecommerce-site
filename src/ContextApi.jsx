// import React, {createContext, useContext, useState} from 'react';
import React, {useState} from 'react'
import Child from './Child';
import OtherChild from './OtherChild'
import Api from './Api'

export const GlobalInfo = React.createContext();


const ContextApi = () => {
    const [day , setDay] = useState('monday');
    const [color, setColor] = useState('green');
    const getDay=(item)=>{
        console.warn(item);
        setDay(item);
      }

  return (
    <>
    <GlobalInfo.Provider value={{appcolor:color,getDay:getDay}}> 
    <div>
        <h1>Context api {day}</h1>
    <Child />
    <OtherChild />
    </div>
    </GlobalInfo.Provider>
    <Api  />
    </>
  )
}

export default ContextApi
