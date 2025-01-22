import React,{useContext} from 'react'
import {GlobalInfo} from './ContextApi';
import SuperChild from './SuperChild';


const Child = () => {
    const {appcolor} = useContext(GlobalInfo);
  return (
    <div>
      <h2 style={{color:appcolor}}>child component</h2>
      <SuperChild />
    </div>
  )
}

export default Child
