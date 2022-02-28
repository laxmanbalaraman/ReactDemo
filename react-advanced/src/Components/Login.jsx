import React, { useContext } from "react";
import UserContext from "../Context/userContext";

const Login = (props) => {
  const userContext = useContext(UserContext);
  return (
    <button onClick={() => userContext.onLoggedIn("Username")}>Click</button>
  );
};

export default Login;
