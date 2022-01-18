import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./form";

class LoginForm extends Form {
  // always declare form field elements with empty string. if the state is null of undefined
  // then it will be given its own state and hence becomes uncontrolled.

  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required(),
    password: Joi.string().required(),
  };

  doSubmit = () => {
    // call server
    console.log("Submitted");
  };
  render() {
    const { data, errors } = this.state;
    return (
      <div>
        <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}
export default LoginForm;
