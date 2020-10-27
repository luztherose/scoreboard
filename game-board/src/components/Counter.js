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
        This class properties syntax is a feature of JavaScript that's currently not support by all browsers.

        State is local to a component, meaning a component can maintain is own state, unlike props which are read-only.
        */
        super() 
        this.state = {
            /*Since state is data that changes overtime we first name to set an initial state or the state of the component whe it fist mount*/
            // This state in our counter is going to be the score we want to display for each player.

            // To make our counter interactive we need to be able to triger changes to the data in state. The score changes when the user clicks the plus or minus button. First, let's create the function or event handler that update our state using React's built-in set state method. 
            // Whenever the score gets updated React will re-render our component and the change will be visible in our UI. 
            // In class components, a common pattern is to create event handlers as a method on the class. 
            score: 0
        };
    }
    increamentScore = () =>  { // the name has not special meaning in React
        //console.log("Hi, from inside increament score!");
        /*
        In React, state is never modified directly. The only way React allows you to update a component's state is by using its built-in setState() method.
        this.setState() let's React knows that state has changed, and that it should re-render and make changes to the component, base on the change in state.
        You pass setState an object that contains the part of the state you wanna update, and the value you want to update it to. 

                Bind Event Handlers to Components
        When you create a class component that extends from React.Component, any custom methods you create are not bound to the component by default. You need to bind your custom methods, so that this refers to the component instance. 
        They are several way to bind thisContext in React. 
        1. A common way is to call bind in the render method 
        Each counter component that gets mounted into the dom is an instance of the counter class.
        In the button's onClick event, I'll call the JavaScript bind method on this.increamentScore and pass it the desired context via this. 
        this.increamentScore.bind(this)

        2. The other common way to bind event handlers is with an arrow function.
        So in my button, I'll pass an arrow function to the onClick event that calls this.increamentScore(onClick={() => this.increamentScore()) We don't need to bind this, that's because arrow functions use what's called a lexical this binding which means that it automatically bind them to the scope in which the are defined. 
        Inside the render method this refers to the counter component instance. The arrow function is enclosed inside the render method, so it takes on the same context. And the this value inside it will properly point to the counter component instance.

        3. The most common way to define a event handler in React is with an arrow function. Arrow functions are automatically bond to the scope in which they are defined. So, if we rewrite the incrementScore method as an arrow function, the function gets bound to the component instance. The arrow function is enclosed inside the counter class, so the context is the component instance. Now we don't need to worry about binding it in the onClick event or in the constructor. We can simply reference and call the function in the onClick event with this.increamentScore make sure there is not parenthenses at the end.
         */
        this.setState(prevState => {
            return {
                score: prevState.score + 1,
            }
        }); 
    }

    /*
    This way we are mutating or altering the state object directly
    decrementScore = () => {
        this.setState({
            score: this.state.score -1,
        });
    }
    */
    // This way is more reliable cause the callback function is garanteed to fired after the update is applied and rendered out to the DOM. To make the callback func more concise you could omit the return keyword and curly braces, by wrapping the body the function in parenthenses. 
    decrementScore = () => {
        this.setState(prevState => {
            return {
                score: prevState.score -1,
            };
        });
        /*
            Update State Based on Previous State
            Whenever you need to update state based on previous state, you shouldn't rely on this.state to calculate the next state. State updates may be asynchronous, so it may not always lead to the component re-rendering with new data, and could cause state inconsistency. setState() accepts a callback function that produces state based on the previous state in a more reliable way. 
        */
    }
    render() {
        /*
            The render method in a class component is a function of not just props but props and state. In other words, if either props or state changes, React executes the render method to update what gets display to the user.  
         */
        return (
            <div className="counter">
            {/* React events are similar to JavaScript events except that they are written inline and named using camelCase.
            In the increament button, we'll specify the event we are listening for, onClick.(This event is specific to React, so you must name it onClick)
            You pass React events JXS expressions, using curly braces and the event handler that will get called when the specified event happens. We don't use parentheses to all increamentScore like we usually do to call functions or methods in JavaScript. We are only passing a reference to the method. Adding parentheses will call increamentScore and make it run right when the component mounts, or gets displayed on the page, which we don't want. We want React to call increamentScore only when the onClick event is fired.
             */}
                <button className="counter-action decrement" onClick={ this.decrementScore }>-</button>
                <span className="counter-score">{ this.state.score }</span>
                <button className="counter-action increment" onClick={this.increamentScore }>+</button>
            </div> 
        );
    }
    
}

export default Counter; 