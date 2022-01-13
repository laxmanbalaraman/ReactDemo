import React, { Component } from "react";
class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav class="navbar navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              Navbar
              <span> {this.props.totalCounters} </span>
            </a>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
