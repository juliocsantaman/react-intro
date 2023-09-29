import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoClick } from '../TodoClick';
import { TodoLoading } from '../TodoLoading';
import { TodoError } from '../TodoError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

function AppUI() {

const { 
  loading,
  error,
  searchedTodos,
  completedTodo,
  deletedTodo,
  openModal,
  setOpenModal
 } = React.useContext(TodoContext);

  return (
    <div className="App">
      <TodoCounter></TodoCounter>
      <TodoSearch></TodoSearch>

      <TodoList>

        {/* {loading && <p>Estamos cargando...</p>} */}
        {loading && (
          <>
            <TodoLoading></TodoLoading>
            <TodoLoading></TodoLoading>
            <TodoLoading></TodoLoading>
          </>
        )}
        {error && <TodoError></TodoError>}
        {!loading && searchedTodos.length === 0 && <EmptyTodos></EmptyTodos>}

        {
          searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onCompletedTodo={() => completedTodo(todo.text)}
              onDeletedTodo={() => deletedTodo(todo.text)} />
          ))
        }


      </TodoList>

      {openModal && (
        <Modal>
          <TodoForm></TodoForm>
        </Modal>
      )}


      <CreateTodoButton></CreateTodoButton>

      <TodoClick></TodoClick>
    </div>
  );
}

export { AppUI };