import React from "react";
import Joi from "joi-browser";
import Form from "./form";
import auth from "../services/authService";

class LoginForm extends Form {
  // always declare form field elements with empty string. if the state is null of undefined
  // then it will be given its own state and hence becomes uncontrolled.

  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().email().required(),
    password: Joi.string().required(),
  };

  doSubmit = async () => {
    // call server
    const { data } = this.state;
    try {
      await auth.login(data.username, data.password);
      // since the app componentdidmount is renedered only once, inorder to pass the user name to state
      // we reload the page to rendet the app component again.
      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/";
      // this.props.history.push("/");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };
  render() {
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
