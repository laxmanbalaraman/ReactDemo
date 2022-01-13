import React from "react";

// when dealing with simple stateless components good practice is to use functional component
// there is nothing wrong in using class component tho.
// while using functional component get props as parameter.

// instead of addressing as this.props, use object destructing: for function-> inside argument
// and for class inside render method
const Navbar = ({ totalCounters }) => {
  return (
    <React.Fragment>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
            <span className="badge badge-pill badge-secondary m-2">
              {totalCounters}
            </span>
          </a>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
