import React from 'react';
import { TodoContext } from '../TodoContext';
import './CreateTodoButton.css';

function CreateTodoButton() {

  const { openModal, setOpenModal } = React.useContext(TodoContext);

  function myClick(event) {
    console.log('le diste click');
    console.log('event', event);
    setOpenModal(!openModal);
  }
  
  return (
    <button type="button" className="CreateTodoButton" onClick={myClick}>+</button>
  );
}


export { CreateTodoButton };