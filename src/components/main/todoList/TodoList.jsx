import { useState } from "react";
import css from "./TodoList.module.css";

const TodoList = (props) => {
  const [isInputShow, setInputShow] = useState(true);
  const [inputValue, setInputValue] = useState(props.text);

  const onDelete = () => {
    props.deleteTodo(props.id);
  };

  const onStatusChange = () => {
    props.statusChange(props.id);
  };


  const onEdit = () => {
    setInputShow(!isInputShow);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.editTodo(props.id, inputValue);
    setInputShow(true)
  };
  return (
    <div className={css.list}>
      {isInputShow ? (
        <div>
          <input
            onChange={onStatusChange}
            type="checkbox"
            checked={props.status}
            id="check"
          />
          <label htmlFor="check">{props.text}</label>
        </div>
      ) : (
        <form onSubmit={submitHandler}>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
          />
          <button type="submit">save</button>
        </form>
      )}

      <button onClick={onEdit}>edit</button>
      <button onClick={onDelete}>delete</button>
    </div>
  );
};
export default TodoList;
