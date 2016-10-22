import React, { Component } from 'react';
import './styles.css';

class Header extends Component {

  onClick(e) {
    console.log(e);
    this.props.onClick(e.target);
  }

  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <button type="button" 
                  className="btn btn-success navbar-btn"
                  onClick={this.onClick.bind(this)}>
                  {this.props.data[0]}
          </button>
        </div>
      </nav>
    )
  }
}

export default Header;
