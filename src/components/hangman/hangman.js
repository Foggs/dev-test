import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';
import './styles.css';

class Hangman extends Component {
  constructor (props) {
    super(props)
    this.state = {
      word:'HANGMANH',
      wordArray: [],
      guesses: [], 
      guessesLeft: 6,
      showError: false,
      inputError: '',
      errors: {
        input: {
          dupeError:"You have already chosen that letter!",
          invalidCharacter:"Please Enter a letter!"
        }    
      }
    };
  }

  /*
    Take the word to guess string and split it into an array,
    make sure the input is focused 
   */
  componentWillMount() {
    var len = this.state.word.split('').length;
    var tmp = [];
    for(var i=0; i < len; i++) {
      console.log(tmp);
      tmp.push('?');
    }
    this.setState({
      wordArray:tmp
    })
  }

  componentDidMount() {
    this.clearInput();
  }


  update(e) {
    e.preventDefault();
    let guess = ReactDOM.findDOMNode(this.refs.guessInput).value.toUpperCase();
    // check to see if the character is a 'letter' if not show a validation error
    if(this.validateInput(guess) === false) {
      return this.setState({
        showError: true,
        inputError: this.state.errors.input.invalidCharacter
      })
    }
    // check to see if the guess has already been used if so show a validation error
    if(this.checkDupes(guess) === true) {
      return this.setState({
        showError: true,
        inputError: this.state.errors.input.dupeError
      })
    }
    // check to see if the guess is correct
    if(_.contains(this.state.word.split(''), guess)) {
      // reveal the hidden letter(s)
      this.revealCorrectGuess(guess);
    } else {
      this.wrongGuess(guess)
    }
  }

  // check to see it the letter guess is in the word, if so reveal the letter
  // if the letteer is not in the word add the guess to the 'guessed letters array'
  // and decrement the guesses left count 
  revealCorrectGuess(guess) {
    var tmp = this.state.wordArray;
    _.filter(this.state.word.split(''), function(letter, index, letters) {
      if(letter === guess) {
        tmp[index] = letter;
      }
    },this)
    this.setState({
      showError: false,
      wordArray:tmp,
      guesses: this.state.guesses.concat(guess)
    })
    this.clearInput();
  }

  wrongGuess(guess) {  
    let guessesLeft = this.state.guessesLeft;
    this.setState({
      showError: false,
      guessesLeft: guessesLeft-1,
      guesses: this.state.guesses.concat(guess)
    })
    this.clearInput();
  }

  // renders the input validation error states
  renderInputError() {
    if(this.state.showError) {
      return (<p className="bg-danger text-danger">
        {this.state.inputError}
      </p>)
    }
  }

  checkDupes(guess){
    return _.contains(this.state.guesses, guess);
  }

  validateInput(str) {
   var patt = new RegExp(/([A-Z])/g );
   return patt.test(str);
  }

  clearInput() {
    ReactDOM.findDOMNode(this.refs.guessInput).value ='';
    ReactDOM.findDOMNode(this.refs.guessInput).focus();
  }

  getErrorState() {
    return this.state.showError ? 'form-group has-error' : 'form-group';
  }

  submitErrorState() {
    if(this.state.showError) 
      return 'disabled';
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-6 col-md-6x">
            <h3>{'HANGMAN GAME'}</h3>
          </div>
        </div>
          
        <div id="hangman" className="row">
          {
            this.state.wordArray.map((letter, key) => {
              return ( 
                <div className="col-xs-1 col-md-1 hiddenLetter" key={key}>
                  <span>{this.state.wordArray[key]}</span>
                </div>
              )
            })
          }
        </div>
        
        <div className="row">
          <h3>Remaining Guesses: {this.state.guessesLeft}</h3>
          <hr/>
        </div>
        
        <div className="row">
          <form onSubmit={this.update.bind(this)} className="form-inline">
            <div className={this.getErrorState()}>
              <label>Guess:</label>
              <input id="guess" type="text" className="form-control" maxLength="1" ref="guessInput"/>
              <button type="submit" disabled={''} className="btn btn-default">Enter</button>
              <div>
              {this.renderInputError()}
              </div>
            </div>
          </form>
          <div>
            <label>Guesses:</label>
            <input id="guessesInput" className="form-control" type="text" value={this.state.guesses} readOnly/>
          </div>
          <hr/>
        </div> 
      </div>
    )
  }
}

export default Hangman;
