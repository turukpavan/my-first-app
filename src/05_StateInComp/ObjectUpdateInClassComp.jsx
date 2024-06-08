import React, { Component } from 'react';

class ObjectUpdateInClassComp extends Component {
    constructor(){
        super();
        this.state={
            x:{
                Name:'Pavan',
                RollNo:39,
            }
        }
        
    }

    changeObj(){
        let obj=this.state.x;
        this.setState({x:{...obj,Name:"rohan",RollNo:obj.RollNo+1}})
    }

    render() {
        return (
            <div>
                <h1>update Object: {JSON.stringify(this.state.x)}</h1>
                <button onClick={this.changeObj.bind(this)}>ObjectUpdateInClassComp</button>
            </div>
        );
    }
}

export default ObjectUpdateInClassComp;