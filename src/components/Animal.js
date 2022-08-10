import React, { Component } from 'react';
import{Card} from 'react-bootstrap';



export default class Animal extends Component {

  render() {
    return (
      <>
      {/* passing data through the component. Need to use props */}

      {/* <h2>{this.props.title}</h2>
      <p><img src = {this.props.img} width = "300" height = "200"></img></p>
      <p><h6>{this.props.description}</h6></p> */}

      <Card style  = {{width: '30rem', backgroundColor: 'black', color: 'white', margin: "20px"}}>
        <Card.Img variant = "top" src={this.props.img} alt={this.props.title}/>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <Card.Text>Horns: {this.props.horns}</Card.Text>
        </Card.Body>
      </Card>
      </>
    )
  }
}
