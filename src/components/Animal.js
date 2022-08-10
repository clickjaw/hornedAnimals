import React, { Component } from 'react';
import{Button, Card} from 'react-bootstrap';


export default class Animal extends Component {

  render() {
    return (
      <>
      {/* passing data through the component. Need to use props */}
      {/* <h1>{this.props.title}</h1>
      <h3>{this.state.cart} added to cart</h3>
      <p>{this.props.description}</p>
      <p>{this.props.price}</p>
      <p><img onClick = {() => this.handleClicks()} src = {this.props.image} alt = {this.props.title}></img></p> */}

      <Card style  = {{width: '50rem'}}>
        <Card.Img variant = "top" src={this.props.img} alt={this.props.title}/>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
        </Card.Body>
      </Card>

      </>
    )
  }
}
