import React from "react";
import { Component } from "react";
import Table from 'react-bootstrap/Table';

class FetchAPIAssign_1 extends Component {
    constructor(){
        super();
        this.state={
            user:[]
        }
    }

    componentDidMount(){
        console.log('component Did Mount Call');
        this.fetchUserDetails();
    }

     fetchUserDetails= async()=>{
        console.log('inside fetch user Details Function');
        const userData= await fetch('https://fakestoreapi.com/users');
        const data=await userData.json();
        console.log(data);
        this.setState({user:data})
    }

    render(){
        return(
            <>
        <h1>API call: using Fetch Method</h1>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>PHONE</th>
        </tr>
      </thead>
      <tbody>
        {this.state.user.map((user)=>{
            return(
                <tr>
                    <td>{user.id}</td>
                    <td>{user.name.firstname}</td>
                    <td>{user.name.lastname}</td>
                    <td>{user.username}</td>
                    <td>{user.phone}</td>
                </tr>
            )
        })}
      </tbody>
    </Table>
    </>
        )
    }
}

export default FetchAPIAssign_1;


