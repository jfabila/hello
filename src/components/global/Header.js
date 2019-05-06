import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Para alguien que no ve los comandos props
// sudo npm install -g yarn
// yarn add prop-types﻿

//Assets
import logo from './images/logo.svg';
import './css/Header.css';

class Header extends Component {

  static propTypes ={
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  };

  render() {
    const{title, items}=this.props;

    return (
      <div className="Header">
       <div className="Logo">
          <img src={logo} alt="logo" />
        </div>
          <p>
            {title}
          </p>
         <ul className="Menu">
          {
            items && items.map(
              (item, key) => <li key={key}><Link to={item.url}></Link> {item.title}</li>
              )
              
              }
         </ul>
      </div>
    );
  }
}

export default Header;


/* <a
className="App-link"
href="https://reactjs.org"
target="_blank"
rel="noopener noreferrer"
>
Learn React
</a> */