import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (id) => {
    // console.log("handleDelete called", this.state.counters);
    const counters = this.state.counters.filter((counter) => counter.id !== id);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  handleIncrement = (c) => {
    console.log("Increment clicked", c);
    const counter = this.state.counters.map((counter) => {
      if (counter.id === c.id) {
        counter.value++;
      }
      return counter;
    });
    this.setState({ counter });
  };

  handleDecrement = (c) => {
    console.log("Decrement clicked", c);
    const counter = this.state.counters.map((counter) => {
      if (counter.id === c.id) {
        counter.value--;
      }
      return counter;
    });
    this.setState({ counter });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleReset} className="btn btn-primary btn-sm">
          Reset
        </button>
        {this.state.counters.map((counter) => (
          // tags inside component is called childeren and they can be accesssed using props

          <Counter
            key={counter.id}
            // good practice to send the entire object as attribute value to reduce space
            // value={counter.value}
            // id={counter.id}
            handleDelete={this.handleDelete}
            handleIncrement={this.handleIncrement}
            handleDecrement={this.handleDecrement}
            counter={counter}
          >
            {/* can be accesesed using this.props.children */}
            <h6>Counter {counter.id}</h6>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
