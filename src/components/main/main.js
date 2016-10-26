import React, { Component } from 'react';
import Column1 from './column-one/column_one';
import Column2 from './column-two/column_two';
import Column3 from './column-three/column_three';
import Column4 from './column-four/column_four';

import '../../App.css';

class Main extends Component {
  render() {
    return (
      <div id="main" className="row">
        <Column1 data={this.props.data}/>
        <Column2/>
        <Column3/>
        <Column4/>
      </div>
    )
  }
}

export default Main;
