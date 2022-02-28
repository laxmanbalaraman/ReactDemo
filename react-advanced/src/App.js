import "./App.css";
import React, { Component } from "react";
import Movies from "./Components/Movies";
import Counter from "./Hooks/Counter";
import User from "./Hooks/User";
import MoviePage from "./Components/MoviePage";
import Login from "./Components/Login";
import UserContext from "./Context/userContext";
import CartContext from "./Context/cartContext";

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
      <CartContext.Provider value={{ cart: [] }}>
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
      </CartContext.Provider>
    );
  }
}

export default App;
