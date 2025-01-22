import React,{useContext} from 'react'
import {GlobalInfo} from './ContextApi';


const OtherChild = () => {
    const {appcolor} = useContext(GlobalInfo);
  return (
    <div>
      <h2 style={{color:appcolor}}>OtherChild component</h2>
    
    </div>
  )
}

export default OtherChild;
