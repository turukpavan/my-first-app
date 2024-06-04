import React from "react";

function ChildComponentB(props){

    return(
        <>
        <h4>this is ChildContainerB</h4>
        <h4>{props.str1} </h4>
        <h4>{JSON.stringify(props.obj1)}</h4>
        </>
    )
}


    export default ChildComponentB;