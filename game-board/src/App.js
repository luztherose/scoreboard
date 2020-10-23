import React from 'react';
import './App.css';
import Core from './Core.js'

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

function App() {
  return (
    <div className="scoreboard">
        <Core initialPlayers={players}/> 
        {/* Props 
          Every React component and element can receive a list of attributes called properties (or props). Props are a core concept in React because it's how you get data into a component.
          You pass props to a component via the component's JXS tag at the place where is used. You can give a prop any name tha you want.
          Anytime you pass a value other than string, like a number or variable, you place it btw curly braces so that it gets evaluted as a JXS expression.
          The javaScript we write btw curly braces needs to be an expession or something that returns a value
          Props pass data from a parent component down to a child component.
          Prop Tips
          1. When a component has more than one prop, you'll often see them written on separate lines and indented.
          2. You can omit the value of a prop when it's explicitly true
          3. Use double quotes (") when writing props. HTML attributes commonly use double quotes instead of single, so props mirror this convention
        */}
    </div>
  );
}

// ReactDOM.render(
//   <App initialPlayers={players} />,
//   document.getElementById('root')
// );
export default App;

