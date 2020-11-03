import React, {Component} from 'react';
import '../App.css';
import Header from './Header';
import Player from './Player';

class App extends Component { //make App a stateful component
  /*
    Types of State
  There are two main types of state:
  1) Application State
  Application State is the main state we typically think about. Data that is available to the entire application.

  2) Component State
  State that is specific to a component and not shared outside of the component.
  (Local Component)
  Ex. the state of the Counter component
  */
  state = {
    players: [
      {
        name: "Luz",
        score:0,
        id: 1 //this create a unique key manually
    },
    {
        name: "George",
        score:0,
        id: 2 //this create a unique key manually
    },
    {
        name: "Louis",
        score:0,
        id: 3 //this create a unique key manually
    },
    {
        name: "Smith",
        score:0,
        id: 4 //this create a unique key manually
    }
    ]
  }
  handleScoreChange = (index, delta) => {
    //delta is the variation of a function
    //the index param will determine the player whose score would change
    debugger

      this.setState(prevState => {
        debugger
        return {
          score: prevState.players[index].score += delta,
        }
      });
      //console.log("index " + index, "delta " + delta)
  }

  handleRemovePlayer = (id) => {
    // the func takes an id param for the player to remove from state
    this.setState(prevState => {
      // To the setState, we pass an object containing the prop to update
      // We should never modify or mutate state directly, in order to remove a player from the players array on state, we need to produce a new array that no longer contains the player object we want to remove.
      return {
        players: prevState.players.filter((player) => {
          return player.id !== id; // This return all the players excepts for the one we want to remove.
        } )
      }
        
      
      
    });

  }
  render() {
    return (
      <div className="scoreboard">
      {/* const arrayOfPlayers = props.initialPlayers; */}
          <Header
                  title="scoreboard"
                  totalPlayers={this.state.players.length}//Number of players
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
                this.state.players.map( (player, index) => //this an implicit return omitting the return keyword and curly braces
                  <Player 
                      name={player.name} 
                      score={player.score}
                      id={player.id}
                      key={player.id.toString()} 
                      index={index}
                      changeScore={this.handleScoreChange}//this callback will run at later time thr some interaction with a child
                      removePlayer={this.handleRemovePlayer}
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
  
}
export default App;

