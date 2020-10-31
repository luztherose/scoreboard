import React from 'react';

// define the component as arrow function
// When you define a component using a function, the function gets one default argument from react, a props object containing a list of props given to the component.
// To enable the use of props in our Component, we have to give our function a parameter(props). This parameter can be named anything you want, but props is the name most commonly use. 
const Header = (props) => { // an arrow func expression
    //console.log(props)
    return ( 
        // if your are returning just JSX, you can use an implicit return
        <header>
        {/* To place the value of the props into the JXS inside the h1 and span, replacing the static text.To access the title and totaPlayers properties of the props obj use use dot notation just as you do this with any object literal in JS.
        To display the content we use a JXS expression, a JXS expression is sourranded by curly braces.
        props are "read only" (or immutable), which means that a component can only read the props given to it, never change them. The (parent) component higher in the tree owns and controls the property values. 
         */}
            <h1>{ props.title }</h1>
            <span className="stats">Players: { props.totalPlayers
} </span>
        </header>
    );
    // including parentheses in JXS in optional
}


export default Header;