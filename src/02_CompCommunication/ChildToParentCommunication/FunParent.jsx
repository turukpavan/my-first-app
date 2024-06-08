import React from "react";
import { useState } from "react";
import FunChild from "./FunChild";

function FunParent() {
    const[message,setMessage]=useState('Parent message');


    const funData=(arg)=>{
        setMessage(arg)
    }
    return(
        <div className="border border-4 border-primary rounded-4 p-4">
            <h1>this is Parent component</h1>
            <h2>Message :{message}</h2>
            <FunChild data={funData}/>

        </div>
    )
}
export default FunParent;