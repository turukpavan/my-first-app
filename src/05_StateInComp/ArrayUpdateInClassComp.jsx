import React, { Component } from 'react';

class ArrayUpdate extends Component {
    constructor(){
        super();
        this.state={
            x:[0,1,3],
        }
    }

    updateArr(){
        let arr=this.state.x;
        this.setState({x:[...arr,arr[arr.length-1]+1]})
        console.log(this.state.x);
    }

    render() {
        return (
            <div>
                <h1>array: {this.state.x.join(",")}</h1>
                <button className='button btn-primary rounded ' onClick={this.updateArr.bind(this)}>ArrayUpdateInClassComp</button>
            </div>
        );
    }
}

export default ArrayUpdate;