import React, { Component } from 'react';
// import update from 'immutability-helper';

class Todoitem extends Component {
    constructor(args){
      super(args);
      
      let colors =['default', 'red']
      let cardColor= colors[Math.floor(Math.random(), (colors.length -1 -0+1)) + 0]
      
      this.state= {
        edit:'false',
        color: cardColor,
        text: this.props.todo.text
      }
    }

    static getDerivedStateFromProps(props, state){
        console.log("to getDerivedStateFromProps")
       return{
            readonly: props.readonly
       }
    }

    resetCount = (e) => {
        e.preventDefault();
        this.setState({
            count: 0
        })
    }

    render(){
      return(
        <div className="Todoitem">
        </div>
      )
      }
      
    }
    export default Todoitem;