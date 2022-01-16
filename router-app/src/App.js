import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      // the route algorithm shows pages that matches the startwith() so "/" and "/products" will be shown at same time.
      // use <switch></switch> or exact keyword in route component.
      // When using switch arrange url from specific to genric to match the url precisely
      <div>
        <NavBar />
        <div className="content">
          <Switch>
            {/* send route props and component prop  */}
            <Route path="/products/:id" component={ProductDetails} />
            <Route
              path="/products"
              render={(props) => <Products sortBy="newest" {...props} />}
            />
            <Route path="/posts/:year?/:month?" component={Posts} />
            <Route path="/admin" component={Dashboard} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact component={Home} />
            <Redirect to="/not-found" />
            {/* use exact as parameter above */}
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
