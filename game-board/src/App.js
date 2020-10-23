import React from 'react';
import './App.css';
//import Core from './Core.js'
import Header from './Header.js';
import Player from './Player.js';

function App(props) {
  const arrayOfPlayers = props.initialPlayers;
  return (
    <div className="scoreboard">
        <Header
                title="scoreboard"
                totalPlayers={arrayOfPlayers.length}//Number of players
            />
            {/* Props 
                Every React component and element can receive a list of attributes called properties (or props). Props are a core concept in React because it's how you get data into a component.Props pass data from a parent component down to a child component.
                You pass props to a component via the component's JXS tag at the place where is used. You can give a prop any name tha you want.
                Anytime you pass a value other than string, like a number or variable, you place it btw curly braces so that it gets evaluted as a JXS expression.
                The javaScript we write btw curly braces needs to be an expession or something that returns a value
                Prop Tips
                1. When a component has more than one prop, you'll often see them written on separate lines and indented.
                2. You can omit the value of a prop when it's explicitly true
                3. Use double quotes (") when writing props. HTML attributes commonly use double quotes instead of single, so props mirror this convention
            */}
            {/* player list */}
            
            {//Every JavaScript expression written inside JXS needs to be place inside curly braces. So the JXS is able to evalute the expression
                arrayOfPlayers.map( player => //this an implicit return omitting the return keyword and curly braces
                <Player 
                    playerName={player.name} 
                    score={player.score} 
                    key={player.id.toString()} 
                    /*
                    A key is a unique identifier that gives React a way to quickly and realibly identify an element in the list. It should be unique and should not be reused.(using indexes for keys is not recommended if the order of items may change. This can negatively impact performance and may cause issues with component state. )

                    The React docs recommend that we pass a string as the key value. So, to convert the id to string, we can call the toString() method on the player.id.

                    Not all React elements need a key prop. Pass a key prop anytime you're creating elements by itering over an array of items that will be rearranged, added or deleted in your UI. The key will help React identify which items were changed, added or removed from the DOM.
                     */
                    />
                    /* Since player is the parent of counter, it's going to define the props for both a player's name and score. */
            )}
    </div>
  );
}
export default App;

