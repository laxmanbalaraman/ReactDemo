import "./App.css";
import React, { Component } from "react";
import Movies from "./Components/Movies";
import Counter from "./Hooks/Counter";
import User from "./Hooks/User";
import UserContext from "./Context/userContext";
import MoviePage from "./Components/MoviePage";
import Login from "./Components/Login";

class App extends Component {
  // use this state variable in another component easily using context drilling

  state = {
    currentUser: null,
  };

  handleLoggedIn = (username) => {
    console.log(username);
    const currentUser = { name: "Mosh" };
    this.setState({ currentUser });
    console.log(currentUser.name);
  };

  render() {
    return (
      // the value property where you send the state variables.
      // UserContext.Provider provides state variables to be consumed by another component down the hierarchy
      <UserContext.Provider
        value={{
          currentUser: this.state.currentUser,
          onLoggedIn: this.handleLoggedIn,
        }}
      >
        <div>
          <MoviePage />
          <Login />
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;
