import { useState } from "react";
import css from "./Main.module.css";
import TodoList from "./todoList/TodoList";

const Main = (props) => {
  const [value, setValue] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    props.addTodo(value);
    setValue("");
  };

  return (
    <main className={css.main}>
      <section className={css.todoList}>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="enter todo task.."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
        {props.todoListData.length ? (
          props.todoListData.map((item) => (
            <TodoList
              key={item.id}
              id={item.id}
              text={item.list}
              status={item.status}
              deleteTodo={props.deleteTodo}
              statusChange={props.statusChange}
            editTodo = {props.editTodo}
            />
          ))
        ) : (
          <h1 style={{ textAlign: "center" }}>Список задач пуст</h1>
        )}
      </section>
    </main>
  );
};
export default Main;
