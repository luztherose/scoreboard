import React from 'react';
import Counter from './Counter.js';

const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                {props.playerName}
            </span>

            <Counter score={props.score}/> 
            {/* 
            Composition is when a component contains others components.
            A component is a small reusable chunk of code that is usually responsible for rendering one piece of the user interface.
            */}
            {/* I'll give the child counter component a prop (of score), the prop can be named anything you want but to be consistent the with prop pass to the player component I named it score.
            I'll pass the score prompt down to the counter with props.score.
            Now, we can use the score prop by passing the counter function the parameter props and replacing the static score with curly braces and props.score.
            Each component in your UI should be responsible for one thing only, and shouldn't contain extra code to handles other things.
            In other words, each component addresses a specific concern.
            */}
        </div>
    );
}

export default Player;