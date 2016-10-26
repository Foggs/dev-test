import React, { Component } from 'react';
import './styles.css';

class Footer extends Component {
  render() {
    return (
      <footer id="footer" className="navbar-default navbar-fixed-bottom">
        <div className="container-fluid">
        <div className="container">
          <h4>Static Footer - Full Width</h4>
          <p><small> Robert Foggo Devloper Assessment: {this.props.data}</small></p>
         </div>
        </div>
      </footer>  
    )
  }
}

export default Footer;
