import React, { Component } from 'react';
import './styles.css';

class Column4 extends Component {
  render() {
    return (
      <div id="col-4" className="col-sm-3 col-md-3">
        <h4>Column 4</h4>
        <img src="http://lorempixel.com/output/abstract-q-c-640-480-4.jpg" className="img-responsive" alt="abstract"/>
      </div>
    )
  }
}

export default Column4;
