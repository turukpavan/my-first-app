import React, { Component } from "react";

class ClassLifeCycleMethods extends Component {
  //1.Initialization phase
  constructor(props) {
    super(props);
    this.state = {
      message: "Welcome to React",
    };
    console.log("Class Component Constructor");
  }

  updateMessage = () => {
    console.log("Inside updateMessage method");
    this.setState({ message: "Welcome to Class comp life cycle" });
  };

   //2. Mounting Phase
   componentDidMount() {
    console.log("Component did mount called");
  }

  render() {
    console.log("Class Component render method called");
    return (
      <>
        <h3>Class component Life cycle</h3>
        <p>State Message :{this.state.message}</p>
        <button
          type="button"
          className="btn btn-success"
          onClick={this.updateMessage}
        >
          Update State
        </button>
      </>
    );
  }
 
  //3. updating phase
  componentDidUpdate() {
    console.log("Component did update called");
    return null;
  }

  //4.Unmounting phase
  componentWillUnmount() {
    console.log("ComponentWillUnmount called");
  }
}

export default ClassLifeCycleMethods;
