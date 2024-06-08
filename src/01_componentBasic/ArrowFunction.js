import React  from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
let ArrowFunction=()=>{
    return(
        <div>
        <h1>This is Arrow Function</h1>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Java Script Tutorial</Card.Title>
        <Card.Text>
        Welcome to JavaScript Learning Session
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </div>

    )
}

export default ArrowFunction