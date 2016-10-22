import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Hangman from './components/hangman/hangman';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(
  <Hangman />,
  document.getElementById('hangman')
);
