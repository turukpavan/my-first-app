import React from "react";
import { Component } from "react";
import Child from "./Child";

class  Parent extends Component{
     constructor(){
            super();
            this.state={
                message : "Message from Parent Component"
            }
     }

      FunForChildCall= (message) =>{

        console.log('inside parent_function which is is called by child Component ');
        this.setState({message})
      }

    render(){
        return(
            <div className="border border-4 border-danger p-5">
            <h1>Parent Component</h1>
            <h2>Message: {this.state.message}</h2>
            <Child message={this.FunForChildCall}/>

            </div>
        )
    }

}

export default Parent;