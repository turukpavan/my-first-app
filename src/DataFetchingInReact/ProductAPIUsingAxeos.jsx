import React, { Component } from "react";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class ProductAPIUsingAxeos extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    console.log("component Did Mount");
    this.callProductAPI();
  }

  async callProductAPI() {
    const product = await fetch("https://fakestoreapi.com/products");
    const productData = await product.json();
    console.log(productData);
    this.setState({ products: productData });
  }

  render() {
    return (
        // {{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}
        <div className="d-flex justify-content-around flex-wrap">
       {this.state.products.map((pro)=>{
        return(
            <Card style={{ width: '18rem' }}>
              <div className="w-100 ">  
      <Card.Img variant="top" src={pro.image} className=" w-50 ms-5 "/>
      </div>
      <Card.Body>
        <Card.Title>{pro.title}</Card.Title>
        <Card.Text>
          {pro.description}
        </Card.Text>
      </Card.Body>
    </Card>
        )
       })}
       
      </div>
    );
  }
}

export default ProductAPIUsingAxeos;
