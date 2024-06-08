import React from "react";

function FunChild(props){
    // const message='Message From Child Component'
    const message='Child Message'

    const fun=()=>{
        props.data(message)
    }

    return(
        <div className="border border-4 border-danger rounded-4 p-4">
            <h1>this is Child Component</h1>
            <button className="rounded-4 bg-danger p-2" onClick={fun}>change Parent Message</button>
        </div>
    )
}
export default FunChild;