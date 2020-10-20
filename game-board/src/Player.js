import React from 'react';
import Counter from './Counter.js';

const Player = () => {
    return (
        <div className="player">
            <span className="player-name">
                Luz
            </span>

            <Counter /> 
            {/* Composition is when a component contains others components */}
        </div>
    );
}

export default Player;