import React, { Component } from 'react';
import data from "../data.json";
import Animal from "./components/Animal";

export default class Main extends Component {
  render() {
    return (
      <>
    {data.animal.map(animal => {
        return(
            <Animal
            title = {animal.title}
            
            />

        )


    })}
        
      </>
    )
  }
}
