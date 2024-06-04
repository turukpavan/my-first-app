import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
function UseEffectHookAssign(){
    const[products,setProducts]=useState([]);


    useEffect(()=>{
        console.log('inside UseEffect hook with dependency array');
        APIProduct();
    },[]);

   async function APIProduct(){
    const URL= await axios.get('https://fakestoreapi.com/products')
    const data=URL.data;
    setProducts(data);    
   }
    return(
        <>
        <h1>Fetch Data from API using axios and useEffect </h1>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Price</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
       {products.map((product)=>{
        return(
            <tr>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td><img src={product.image} alt="" style={{width:"50px"}} /></td>
            </tr>
        )
       })}
      </tbody>
    </Table>
    </>
    )
}

export default UseEffectHookAssign ;