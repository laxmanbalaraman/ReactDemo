import React, { Component } from 'react';
class Counter extends Component {

    /* 
        state is a react object that contains the dynamic object 
        that this component needs
    */

    state = {
        count: 0, 
        tags: ["tag1", "tag2", "tag3"]
    }

    // dont keep this inside state because myStyles is a static data object and doesn't required to be inside state 

    myStyles = {
        fontSize: 15,
        fontWeight: 'bold'
    }

    // bind the event handler with the object

    constructor(){
        super();
        // this in constructor represents the object
        console.log("constructor", this);
        this.handleIncrement = this.handleIncrement.bind(this)
    }

    // another way to avoid 'this' is to make define the class methods using arrow syntax
    // as arrow function inherits the class and doesn't rebind (experimental feature)

    handleIncrement(id) {
        // this will return undefined unless binded with the object
        console.log("Increment button clicked!", this);
        
        // setState is used to change dynamic values of state object. it simply see the difference and add or merges this object 
        // on top of the previous state object. 
        this.setState(
            { count: this.state.count + 1 }
        );
        // This will be Asynchronous
        console.log("id is", id);
        console.log(this.state.count);
    }


    /*
        The render method must return only one parent element, 
        enclose the jsx inside a div tag or <React.Fragment></React.Fragment>
        if you do not want the parent tag to be rendered. 
    */

    render() {
        // { can take any valid Js expresion } {} -> act like an echo
        /*  class attribute is className in React because class is a reserved keyword in JavaScript 
            and since we use JSX in React which itself is the extension of JavaScript, so we have to use 
            className instead of class attribute
        */
       console.log("Render", this);
        return( 


        <div>
            {/* <span>{ this.state.count }</span> */}
            <span style={ this.myStyles } className = { this.getBadgeClasses() } >{ this.formatCount() }</span>

            {/* to pass arguments in the function we need to used the arrow function which returns our fuction with arguments as
            the onclick attribute only accetps function reference which is what is done by arrow function (basically a function
            returning our indetended function). */}

            <button onClick={() => this.handleIncrement(1)} className="btn btn-secondary btn-sm">Increment</button>

            {/* redering lists */}

            <ul>

            {/* React uses the key prop to create a relationship between the component and the DOM element. 
            If the key is an index, reordering an item in the array changes it. 
            Then React will get confused and re-render the incorrect element. Dont use index as key*/}

                { this.state.tags.map(tag => <li key={ tag } >{ tag }</li>) }
                {/* by concept of truthy and falsey: see bottom of page for more info */}
                { this.state.tags.length === 0 && "Please provide some tags!" }

            </ul>

        </div>
        );
    }

    formatCount() {
        // object destructuring: const { count: ct, var2, ... } = this.state 
        // is same as const ct = this.state.count, ...

        const { count } = this.state;
        return count === 0 ? "Zero" : count; 
    }

    // change badge color dynamically
    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }
}
 
export default Counter;

/*
    Truthy and Falsey:
    '', 0 -> falsey
    non-zero numbers, non empty strings -> truthy

    if an expression results to truthy then the last operand value will be displayed and
    if an expression results to falsey then teh first operand which is falsey will be displayed.
*/