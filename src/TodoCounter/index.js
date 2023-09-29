import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter() {

  const { completedTodosNumber,
    totalTodosNumber } = React.useContext(TodoContext);

  return (
    <h1 className='TodoCounter'>
      Has completado <span>{completedTodosNumber}</span> de <span>{totalTodosNumber}</span> TODOs
    </h1>
  );
}

export { TodoCounter };