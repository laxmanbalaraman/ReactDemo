import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navbar";
import Movies from "./components/movies";
import Customers from "./components/customers";
import notFound from "./components/notFound";
import Rentals from "./components/rentals";
import "./App.css";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/customers" component={Customers} />
          <Route path="/not-found" component={notFound} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/movies" component={Movies} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
