import React, { Component } from "react";

class ClassLifeCycleMethods1 extends Component {
    //initialization phase
    constructor(){
        super();

        this.state={
            count : 0
        }

        console.log('constructor method call');
    }
    updateCount(){
        this.setState({count: this.state.count+1})
    }
   // mounting phase
    componentDidMount(){
        console.log('component did mount called');
    }

    //updating phase
    componentDidUpdate(){
        console.log('component did update called');
    }
   




    render(){
        return(
            <>
            <h1>count:{this.state.count}</h1>
            <button onClick={()=> this.updateCount()} >button</button>
            </>
        )

    }
    //unmounting phase
    componentWillUnmount(){
        console.log('componentWillUnmount called');
    }

}

export default ClassLifeCycleMethods1;