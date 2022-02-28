import React from "react";

const UserContext = React.createContext();
// by default it called context
// always name the context according to its behaviour.
UserContext.displayName = "UserContext";

export default UserContext;
