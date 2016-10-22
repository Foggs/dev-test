import React, { Component } from 'react';
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import ControlledModalExample from './components/modal/Modal';

import './App.css';

class App extends Component {
	constructor (props) {
    super(props)
    this.state = {
      nav: ['Launch Hangman'],
      isActive: false,
      date: ''
    };
	}

  getDate(){
    let t = new Date();
    this.setState(
      {date:t.toDateString()
    })
  }

  componentWillMount() {
    this.getDate();
    console.log(this.state.date)
  }

	update(val) {
		console.log('App '+ val);
	}

  render() {
    return (
      <div className="app">
      <ControlledModalExample/>
      	<Header onClick={this.update} data={this.state.nav}/>
        <div className="container">
        	<Main/>
        </div>
        <Footer data={this.state.date}/>
      </div>
    )
  }
}

export default App;
