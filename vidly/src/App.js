import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import jwtDecode from "jwt-decode";
import NavBar from "./components/navbar";
import Movies from "./components/movies";
import Customers from "./components/customers";
import notFound from "./components/notFound";
import Rentals from "./components/rentals";
import MoviesForm from "./components/moviesForm";
import Register from "./components/register";
import LoginForm from "./components/loginForm";
import Logout from "./components/logout";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  state = {};

  componentDidMount() {
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      this.setState({ user });
    } catch (e) {}
  }

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar user={this.state.user} />
        <main className="container">
          <Switch>
            <Route path="/movies/:id" component={MoviesForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/not-found" component={notFound} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
