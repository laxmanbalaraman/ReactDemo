import React, { Component } from "react";
import Input from "./input";

class LoginForm extends Component {
  // always declare form field elements with empty string. if the state is null of undefined
  // then it will be given its own state and hence becomes uncontrolled.

  state = {
    account: { username: "", password: "" },
  };

  handleChange = (e) => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };
  handleSubmit = (e) => {
    // to prevent form from reloading when submitting
    e.preventDefault();
    console.log("Submitted");
  };
  render() {
    const { username, password } = this.state.account;
    return (
      <div>
        <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="Username"
            value={username}
            onChange={this.handleChange}
          />
          <Input
            name="password"
            label="Password"
            value={password}
            onChange={this.handleChange}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}
export default LoginForm;
