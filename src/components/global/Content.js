import React, { Component } from 'react';
import propTypes from 'prop-types';

import './css/Content.css';

class Content extends Component {

  static propTypes = {
    body: propTypes.object.isRequired
  };

  render() {
    const { body}= this.props;
    return (
      <div className="Content">
     
    
      </div>
    );
  }
  }

export default Content;