import React, { useEffect, useState } from "react";
import axios from "axios";

function User() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function getUser() {
      const result = await axios("https://jsonplaceholder.typicode.com/users");
      setUser(result.data);
    }
    getUser();
  });

  return (
    <div>
      {user.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </div>
  );
}

export default User;
