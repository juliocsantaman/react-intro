import React from "react";
import { TodoIcon } from '../TodoIcon';

 
function DeleteIcon(props) {
  return (
    <TodoIcon type="delete" color="gray" onClick={props.onClick}></TodoIcon>
  );
}

export { DeleteIcon };