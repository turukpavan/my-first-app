import React, { Component } from "react";

class Child extends Component{
    constructor(){
        super();
        this.state={
            childMessage :' Message from Child Component'
        }
    }

    ChangeData=()=>{
        this.props.message(this.state.childMessage)
    }
    
    render(){
        return(
            <div className="border border-3 border-primary p-2">
            <h1>this is Child Component</h1>
            <button className="rounded bg-primary" onClick={()=>{this.ChangeData()}}>change data of parent component</button>
            </div>
        )
    }
}

export default Child;