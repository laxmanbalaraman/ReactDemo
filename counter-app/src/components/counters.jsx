import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, onDelete, onIncrement, onDecrement, counters } =
      this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm">
          Reset
        </button>
        {counters.map((counter) => (
          // tags inside component is called childeren and they can be accesssed using props

          <Counter
            key={counter.id}
            // good practice to send the entire object as attribute value to reduce space
            // value={counter.value}
            // id={counter.id}
            handleDelete={onDelete}
            handleIncrement={onIncrement}
            handleDecrement={onDecrement}
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
