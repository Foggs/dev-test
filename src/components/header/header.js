import React, { Component } from 'react';
import './styles.css';

class Header extends Component {

  render() {
    return (
      <nav id="header" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
        <div className="navbar-header">
              <h4 className="navbar-brand">
                Static Header - Full Width
              </h4>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header;
