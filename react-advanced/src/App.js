import "./App.css";
import React, { Component } from "react";
import Movies from "./Components/Movies";
import Counter from "./Hooks/Counter";
import User from "./Hooks/User";
import UserContext from "./Context/userContext";
import MoviePage from "./Components/MoviePage";

class App extends Component {
  // use this state variable in another component easily using context drilling

  state = {
    currentUser: { name: "Mosh" },
  };
  render() {
    return (
      // the value property where you send the state variables.
      // UserContext.Provider provides state variables to be consumed by another component down the hierarchy
      <UserContext.Provider value={this.state.currentUser}>
        <div>
          <MoviePage />
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;
