import React from 'react';

// define the component as arrow function
const Header = () => { // an arrow func expression
    return ( 
        // if your are returning just JSX, you can use an implicit return
        <header>
            <h1>Scoreboard</h1>
            <span className="stats">Players: 1 </span>
        </header>
    );
    // including parentheses in JXS in optional
}


export default Header;