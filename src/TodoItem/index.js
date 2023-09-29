import './TodoItem.css';
import { CompleteIcon } from '../CompleteIcon';
import { DeleteIcon } from '../DeleteIcon';

function TodoItem(props) {
  return (
    <li className="TodoItem">
      {/* <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`} onClick={props.onCompletedTodo}>V {props.completed} </span> */}
      <CompleteIcon completed={props.completed} onClick={props.onCompletedTodo} ></CompleteIcon>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      {/* <span className="Icon Icon-delete" onClick={props.onDeletedTodo}>X</span> */}
      <DeleteIcon onClick={props.onDeletedTodo}></DeleteIcon>
    </li>
  );
}

export { TodoItem };