import React, { Component } from "react";
import UserContext from "../Context/userContext";
import MovieRow from "./MovieRow";
class MovieList extends Component {
  // way to use context in componentDidMount();
  static contextType = UserContext;

  componentDidMount() {
    console.log("context", this.context);
  }

  render() {
    return (
      // using userContext.Consumer consume the state from App component.
      // it expect a function as child and a parameter which has the state variables.
      <UserContext.Consumer>
        {(userContext) => (
          <div>
            MovieList
            {userContext.currentUser ? userContext.currentUser.name : ""}
            <MovieRow />
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default MovieList;
