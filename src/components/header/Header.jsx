import TodoList from "../main/todoList/TodoList";
import css from "./Header.module.css";

function Header(props) {
  return (
    <header className={css.header}>
      <h2>
        MY TO DO LIST ({props.sumStatus} / {props.todoListData.length})
      </h2>
    </header>
  );
}

export default Header;
