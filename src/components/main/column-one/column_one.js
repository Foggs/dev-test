import React, { Component } from 'react';
import './styles.css';

class Column1 extends Component {
  render() {
    return (
      <div id="col-1" className="col-sm-3 col-md-3">
        <h4>Ordered List</h4>         
        {<ol>
          {this.props.data.map((result,index) => (
            <li key={index}>{result}</li>
          ))}
        </ol>}
      </div>
    )
  }
}

export default Column1;
