import React from 'react';
import { render } from '@testing-library/react';

const Counter = () => {
    return (
        <div className="counter">
            <button className="counter-action decrement">-</button>
            <span className="counter-score">10</span>
            <button className="counter-action increment">+</button>
        </div>
    );
}

export default Counter; 