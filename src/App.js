import React, { Component } from 'react';
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';

import './App.css';

class App extends Component {
	constructor (props) {
    super(props)
    this.state = {
      isActive: false,
      date: '',
      list :[
        "Russell",
        "Mark",
        "Diane",
        "Shawn",
        "Catherine",
        "Kenneth",
        "Wanda",
        "Nancy",
        "Joan",
        "Christopher"
      ]
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
      	<Header/>
        <div className="container">
        	<Main data={this.state.list}/>
        </div>
        <Footer data={this.state.date}/>
      </div>
    )
  }
}

export default App;
