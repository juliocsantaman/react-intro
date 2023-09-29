import { ReactComponent as CheckSVG} from "./check.svg";
import { ReactComponent as DeleteSVG} from "./delete.svg";
import './TodoIcon.css';

const iconTypes = {
  "check": (props) => <CheckSVG className='Icon-svg' fill={props.color}></CheckSVG>,
  "delete": (props) => <DeleteSVG className='Icon-svg' fill={props.color}></DeleteSVG>
};

function TodoIcon(props) {
  return (
    <span className={`Icon Icon-svg Icon-${props.type}`} onClick={props.onClick}>
      {iconTypes[props.type](props)}
    </span>
  );
}

export { TodoIcon };