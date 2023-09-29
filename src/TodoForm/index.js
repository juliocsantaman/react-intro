import React from "react";
import './TodoForm.css';
import { TodoContext } from '../TodoContext';

function TodoForm() {

  const {
    addTodo,
    setOpenModal
  } = React.useContext(TodoContext);

  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    console.log('newTodoValue', newTodoValue);
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onCancel = (event) => {
    event.preventDefault();
    setOpenModal(false);
  };

  const onChange = (event) => {
    console.log('event.target.value', event.target.value);
    setNewTodoValue(event.target.value);
  };

  return (
    <form className="TodoForm" onSubmit={onSubmit}>
      <label className="TodoForm__label">Escribe tu nuevo TODO</label>
      <textarea className="TodoForm__textarea" placeholder="Estudiar Inglés" value={newTodoValue} onChange={onChange}></textarea>
      <div className="TodoForm__button-container">
        <button type="button" className="TodoForm__button TodoForm__button--cancel" onClick={onCancel}>
          Cancelar
        </button>
        <button type="submit" className="TodoForm__button TodoForm__button--add">
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };