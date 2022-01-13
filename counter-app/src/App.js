import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
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
    const counters = this.state.counters.map((counter) => {
      if (counter.id === c.id) {
        counter.value++;
      }
      return counter;
    });
    this.setState({ counters });
  };

  handleDecrement = (c) => {
    console.log("Decrement clicked", c);
    const counters = this.state.counters.map((counter) => {
      if (counter.id === c.id) {
        counter.value--;
      }
      return counter;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <div className="App">
        <Navbar
          totalCounters={
            this.state.counters.filter((counter) => counter.value > 0).length
          }
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        </main>
      </div>
    );
  }
}

export default App;
