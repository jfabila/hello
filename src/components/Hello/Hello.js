import React, { Component } from 'react';

class Hello extends Component {
    constructor(props){
      super(props);
      this.state= {
        nombre: 'yomi'
      }

    }
    bye = () => {
      this.setState({
        nombre:'al'
      })
    }
  
    render(){
      return(
        <div>
          <h1 onClick={this.bye}>{this.state.nombre}</h1>
        </div>
      )
      }
      
    }
    export default Hello;
  