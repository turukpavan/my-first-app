import React, { useState } from 'react'

 const ArrayUpdateInFuncComp = () => {
    const[array,setArray]=useState([1,2]);

    const changeArr=()=>{
        setArray([...array,array[array.length-1]+1])
    }
  return (
    <div>
        <h1>Array :{array.join(",")}</h1>
        <button onClick={changeArr}>ArrayUpdateInFuncComp</button>
    </div>
  )
}
export default ArrayUpdateInFuncComp;