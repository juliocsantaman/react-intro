import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {

  // console.log('log 1');
  // React.useEffect(() => {
  //   console.log('log 2')
  // }, []);
  // console.log('log 3');

  const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodosNumber = todos.filter((todo) => todo.completed).length;
  const totalTodosNumber = todos.length;
  const searchedTodos = todos.filter((todo) => {
    const normalizedTodoText = todo.text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Normalizar a Unicode NFD y quitar acentos
    const normalizedSearchValue = searchValue.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Normalizar a Unicode NFD y quitar acentos
    return normalizedTodoText.includes(normalizedSearchValue);
  });

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text: text,
      completed: false
    });
    saveTodos(newTodos);
  }

  const completedTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    if (todoIndex !== -1) {
      newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    }
    saveTodos(newTodos);
  }

  const deletedTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    if (todoIndex !== -1) {
      newTodos.splice(todoIndex, 1);
    }
    saveTodos(newTodos);
  }

  return (
    <TodoContext.Provider value={{
      loading,
      error,
      completedTodosNumber,
      totalTodosNumber,
      searchValue,
      setSearchValue,
      searchedTodos,
      completedTodo,
      deletedTodo,
      openModal,
      setOpenModal,
      addTodo
    }}>
      {children}
    </TodoContext.Provider>
  )
}

// <TodoContext.Provider></TodoContext.TodoContext.Provider>
// <TodoContext.Consumer></TodoContext.TodoContext.Consumer>

export { TodoContext, TodoProvider };