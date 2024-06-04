import React, { useState } from 'react'

const StateInFuncComp = () => {
    const [UserName,setUserName]=useState("Guest");
    const [count,setCount]=useState(0);

    const changeUser=()=>{
        setUserName("Admin");
    }
    const counter=()=>{
      setCount(count+1);
    }
  return (
    <div>
<h1>State in functional component</h1>
<h2>Current user : {UserName}</h2>
<h2>count: {count}</h2>
<button onClick={changeUser} >  login</button>
<button onClick={counter} >counter</button>
    </div>
  )
}

export default StateInFuncComp