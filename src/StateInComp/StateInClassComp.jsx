import React, { Component } from 'react'

 class StateInClassComp extends Component {

    constructor(props){
        super(props);
        this.user = "Guest";

        this.state={
            userName:"Guest"
        }

        this.state={
            count:0,
        }

        // this.state={
        //   number:1,
        //   flag:true,
        //   arrayValue:[1,4,3,7,3,7,5],
        //   person:{
        //     name:"Pavan",
        //     age:24,
        //   }
        // }
    }

    changeUser(){
        console.log("Inside change user function")
        this.user = "Admin";
        console.log(this.user)
      
    }

    changeUserName(){
        console.log("inside new change userName function")
        this.setState({userName:"Admin"});
    }

    // changeCount(){
    //     this.setState(prevState => ({
    //         count: prevState.count + 1
            
    //       }));
    //       console.log(this.state.count);
    // }

    changeCount(){
        this.setState({
            count: this.state.count + 1
            
          });


          console.log(this.state.count);
    }

  render() {
    return (
      <>
        {/* <h3>Current User : {this.state.userName}  </h3> */}
        <h3>Count : {this.state.count}  </h3>
        {/* <p>number= {this.state.number}</p>
        <p>flag= {this.state.flag ?"true":"false"}</p>

        <p>arrayValue= {this.state.arrayValue.join(",")}</p>
        <p>person= {JSON.stringify(this.state.person)}</p> */}


        {/* <button onClick={this.changeUser.bind(this)}> Login as Admin </button> */}
        {/* <button onClick={this.changeUserName.bind(this)}> Login as Admin </button> */}
        <button onClick={this.changeCount.bind(this)}> Counter </button>


      </>
    )
  }
}
export default  StateInClassComp