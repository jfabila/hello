import React, { Component } from 'react';

class Counter extends Component {
    constructor(props){
      super(props);
      this.state= {
        count: 0
      }

    }
    bye = () => {
      this.setState({
        nombre:'al'
      })
    }
  
    upCount = (e) => {
        e.preventDefault();
        this.setState(function(prevState) {
            return{
                count: prevState.count + 1
            }
        })
    }

    downCount = (e) => {
        e.preventDefault();
        this.setState(function(prevState) {
            if(prevState.count >=1){
                return {
                    count: prevState.count - 1
                }
            }
        })
    }

    resetCount = (e) => {
        e.preventDefault();
        this.setState({
            count: 0
        })
    }

    render(){
      return(
        <div className="counter">
          <div className="count">{this.state.count}</div>
          <div className="changeCount">
          <a href="#" onClick={this.upCount}>Up</a>
          <a href="#" onClick={this.downCount}>Down</a>
          <a href="#" onClick={this.resetCount}>Reset</a>
          </div>
        </div>
      )
      }
      
    }
    export default Counter;
  