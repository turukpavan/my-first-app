import React from "react";
import { Component } from "react";
import Table from 'react-bootstrap/Table';
import axios from 'axios';


class FetchDataUsingAxosAssign1 extends Component{

    constructor(){
        super();
        console.log('inside constructor');
        this.state={
            user:[]
        }
    }

    componentDidMount(){
        console.log('component did mount called');
        this.APIDataUsingAxios();
    }

    APIDataUsingAxios= async()=>{
        const userData = await axios.get('https://fakestoreapi.com/users');
        const data=userData.data ;
        this.setState({user:data})
        console.log(data);


    }
    render(){
        return(
            <>
            <h1>API Call Using Axios</h1>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Password</th>
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
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                    </tr>
                )
            })}
      </tbody>
    </Table>
    </>
        )
    }
}

export default FetchDataUsingAxosAssign1;