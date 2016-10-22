import React, { Component } from 'react';
import './styles.css';

class Footer extends Component {
  render() {
    return (
      <footer id="footer" className="navbar-default navbar-fixed-bottom">
        <div className="container-fluid">
        <div className="container">
          <p><small> Robert Foggo: Devloper {this.props.data}</small></p>
         </div>
        </div>
      </footer>  
    )
  }
}

export default Footer;
