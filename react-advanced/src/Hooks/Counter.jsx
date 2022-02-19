import React, { useState } from "react";

function Counter(props) {
  // useState returns array of two element, one, the state element, two, the state function to change the value of that state element
  //  useState accept parameter that intializes the value of our state element;

  // in general useState - > state
  // array[0] - > state element
  // array[1] - > setState function

  // if name of state is count, then naming convention of setState fn is setCount;

  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  return (
    <React.Fragment>
      <input text={name} onChange={(e) => setName(e.target.value)} /> <br />
      {name} : {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
    </React.Fragment>
  );
}

export default Counter;
