import React,{useContext} from 'react'
import {GlobalInfo} from './ContextApi';

const SuperChild = () => {
    const {appcolor, getDay} = useContext(GlobalInfo);
    const  day = 'sunday';

  return (
    <div>
      <h2 style={{color:appcolor}}>SuperChild</h2>
      <button onClick={()=>getDay(day)}>click me </button>
    </div>
  )
}

export default SuperChild
 