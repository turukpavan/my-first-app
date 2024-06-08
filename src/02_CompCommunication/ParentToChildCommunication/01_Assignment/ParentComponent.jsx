import React from "react";
import ChildComponentA from './ChildComponentA';

function ParentComponent(){
    const message="this is string message";
    let obj={
        name:"Pavan",
        Batch: "React11",
    }
    return(

        <>
        <h1>this is ParentComponent</h1>
        {/* Passing values of "message " and "obj" to childComponentA */}
        <ChildComponentA str={message} personObj={obj}/>

        </>
    )
}
export default ParentComponent;