import React from 'react';
import ReactDOM from 'react-dom'; //react-dom is a module needed to render our application to the DOM. 
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const players = [
  {
      name: "Luz",
      score: 45,
      id: 1 //this create a unique key manually
  },
  {
      name: "George",
      score: 65,
      id: 2 //this create a unique key manually
  },
  {
      name: "Louis",
      score: 75,
      id: 3 //this create a unique key manually
  },
  {
      name: "Smith",
      score: 95,
      id: 4 //this create a unique key manually
  }
]

ReactDOM.render(
  <React.StrictMode>
    <App initialPlayers={players}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
