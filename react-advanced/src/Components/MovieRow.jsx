import React, { useContext } from "react";
import UserContext from "../Context/userContext";
import CartContext from "../Context/cartContext";
// functional context is better than class contex;
// no need to use UserContext.Consumer and also function to return the child.
// more clean code and less loc.
// easier to use in componentDidMount

const MovieRow = () => {
  const User = useContext(UserContext);
  const cartContext = useContext(CartContext);
  console.log("Cart Context", cartContext);
  return <div>{User.currentUser ? User.currentUser.name : ""}</div>;
};

export default MovieRow;
