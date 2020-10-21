import React from 'react';
import './App.css';
import Header from './Header.js';
import Player from './Player';

function App() {
  return (
    <div className="scoreboard">
        <Header 
          title="scoreboard" 
          totalPlayers={5} 
        />
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
        
        
        {/* player list */}
        <Player playerName="Luz" score={35}/>
        {/* Since player is the parent of counter, it's going to define the props for both a player's name and score. */}
        <Player playerName="George" score={55}/>
        <Player playerName="Louis" score={70}/>
        <Player playerName="Smith" score={60}/>
    </div>
  );
}

export default App;

