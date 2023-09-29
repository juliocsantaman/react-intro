import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext';


function TodoSearch() {

  
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  return (
    <input type="text" placeholder="Cortar cebolla" className="TodoSearch" onChange={myChange} value={searchValue} />
  );

  function myChange(event) {
    // console.log('event', event);
    // console.log('target', event.target);
    // console.log('value', event.target.value);
    setSearchValue(event.target.value);
  }

}

export { TodoSearch };