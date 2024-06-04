import React from "react";
import ChildComponentB from "./ChildComponentB";

function ChildComponentA(props){
        // we receive props value  from parent component
        const{str,personObj}=props

    return(

        <>
        <h3>This is childComponentA</h3>
        <h3>{str} , {JSON.stringify(personObj)}</h3>
        
        {/* we passing the same values that is received from parent(ParentComponent) to  child(ChildComponentA) component again we passed this to other child component(ChildComponentB) */}
        <ChildComponentB str1={str} obj1={personObj}/>
        </>
    )
}

export default ChildComponentA;