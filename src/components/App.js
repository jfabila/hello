import React, { Component } from 'react';
import propTypes from 'prop-types';

import Header from './global/Header';
import Content from './global/Content';
import Footer from './global/Footer';

import Searcher from './Searcher/Searcher';

import Hello from './Hello/Hello';
import Counter from './Counter/Counter';
import Todoitem from './lifecycle/Todoitem';

//data
import items from './data/menu';

import CoursesList from './CoursesList/CoursesList';

let name="jfa";

function A(props){
  // return <p>h {props.name}</p>
  console.log(props.children)
  return props.children;
}

function B(props){
  return <p>{props.name}:10</p>
}

export class Mi extends Component {
  render(){
    return <p>clase</p>
  }
}

class App extends Component {
  static propTypes = {
    children: propTypes.object.isRequired,
  };

  constructor(...props){
    super(...props)

    this.state= {
      courses:[
      { id:1, name: 'react1', teacher:'teacher1'},
      { id:2, name: 'react2', teacher:'teacher2'}
    ]
  }
}

  me = (t) => {
    console.log(t)
  }

  render(){
    const {children } = this.props;

    let name="jfb";
    return (
      <div className="App">

        {/* <Header title="Code jobs" items={items}/> */}
        {/* <Content body={children } ></Content> */}
        {/* <Mi /> */}
        <Searcher  me={this.me}
          /> 
        {/* <Todoitem /> */}
        {/* <A name={name} ><p>testq</p></A> */}
        {/* <B name={name} /> */}
        <CoursesList courses={ this.state.courses } />
        <Footer />
      </div>
    );
  }
}

export default App;
