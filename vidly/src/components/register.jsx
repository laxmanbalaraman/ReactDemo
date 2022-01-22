import React from "react";
import Joi from "joi-browser";
import * as userService from "../services/userService";
import auth from "../services/authService";
import Form from "./form";

class Register extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().email().required().label("Username"),
    password: Joi.string().min(3).required().label("Password"),
    name: Joi.string().required().label("Name"),
  };

  doSubmit = async () => {
    console.log(this.state.data);
    try {
      const response = await userService.register(this.state.data);
      console.log(response);
      auth.loginWithJwt(response.headers["x-auth-token"]);
      // since the app componentdidmount is renedered only once, inorder to pass the user name to state
      // we reload the page to rendet the app component again.
      window.location = "/";
      // this.props.history.push("/");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
    console.log("Registration complete");
  };

  render() {
    return (
      <div>
        <h1>Register Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username", "email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default Register;
