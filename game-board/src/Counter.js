import React from 'react';
//import { render } from '@testing-library/react';

/*
    They are two ways to create a Component in React, a function and a class.
    They are two ways that data gets handle in react, props ans state.

    Functional Component 
When we create a component using a function this style is called stateless functional components. As the name implies, these component written as functions do not humble state. These components are only receiving input through props and rendering UI. 
Functional Components just take in props and return JXS.

    Component as a Class
Class components offer a more powerful way to build components because they're the only type of components that let you use state.
We use a class component just like a functional component by including its JXS tag wherever you want to display it. 

#Classes need to access props with this.props. In class components, props are not are not accessed through arguments like they are in functional components. Props are a property of the component itself. So, this refers to the component instance.

What is State?
State itself is a regular JavaScript Object with properties that define the pieces of data that change.

In React, "state" is the data you want to track in your app. State is what allows you to create components that are dynamic and interactive, and it's the only data that changes over time.
State is what keeps your UI in Sync with your data.

When do you use a class versus a function?

If a component is only receiving input through props and rendering UI, it's best to use a function or a stateless functional component. Functions are little bit easier to write, understand, and read.

When you want to add state, that's when you use a class component. However, you can also create stateless components as classes, there is nothing wrong with this approach, one benefit of this approach if you ever need to convert the component from stateless to stateful, you'll already have a class defined for it.  

*/
/* Functional Component

const Counter = (props) => {
    return (
        <div className="counter">
            <button className="counter-action decrement">-</button>
            <span className="counter-score">{props.score}</span>
            <button className="counter-action increment">+</button>
        </div>
    );
}*/
// Class Component
class Counter extends React.Component {
    /*
        in JS classes, the extends keyword is used to create a subclass, or a child of another class.
        The only method we need to define in a class component is called render.
    */
    constructor() {
        /* since state is an object, we create and initialize state within a class inside the constructor method.
        Inside the constructor, I'll call super in order to call the constructor of the component class that we're extending. And this need to be done before we can use the "this" keyword within the constructor.

        To initialize our component state, write this.state and set equal to an object. You must name this object state, otherwise this will not work.
        You access state in a similar way to how you access props. 

        Another way to initialize state is directly inside a class definition, using a class property. You omit the constructor method and super all together, and reference the state property directly. You don't need to write it as this.state just state, and set equal to the object.
        state = {
            score:0
        }
        This class properties syntax is a feature of JavaScript that's currently not support by all browsers
        */
        super() 
        this.state = {
            /*Since state is data that changes overtime we first name to set an initial state or the state of the component whe it fist mount*/
            // This state in our counter is going to be the score we want to display for each player
            score: 0
        };
    }
    render() {
        /*
            The render method in a class component is a function of not just props but props and state. In other words, if either props or state changes, React executes the render method to update what gets display to the user.  
         */
        return (
            <div className="counter">
                <button className="counter-action decrement">-</button>
                <span className="counter-score">{ this.state.score }</span>
                <button className="counter-action increment">+</button>
            </div> 
        );
    }
    
}

export default Counter; 