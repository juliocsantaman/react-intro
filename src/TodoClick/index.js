import React from "react";

function TodoClick() {
const [state, setState] = React.useState(0);

  return (
    <p onClick={() => { setState(state+1) }}>Click: {state} </p>
  );
}

export { TodoClick };