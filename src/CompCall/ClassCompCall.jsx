import React from "react";

class ClassCompCall extends React.Component{

    render(){
        console.log(this.props);
         const {myName,companyName,personObj}=this.props;

         
        return(
            <>
            <h3>Welcome to ClassCompCall {myName}</h3>
            <h3>welcome to ClassComCall Company name {companyName}</h3>
            <p>Person details {JSON.stringify(personObj)}</p>
            </>
        )
    }
}
export default ClassCompCall;