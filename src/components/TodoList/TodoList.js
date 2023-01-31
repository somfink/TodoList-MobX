import { observer } from "mobx-react";
import { TodoStore } from "../../store/TodoStore";
import "./TodoList.css";

const TodoList = observer(() => {
  const todoItems = TodoStore.todos.map((item) => (
    <li className="todo-item" key={item.id}>
      {item.value}
    </li>
  ));

  return (
    <section className="todo-container">
      <h3 className="todo-list__heading">Pending:</h3>
      <ul className="todo-list">{todoItems}</ul>
      <h3 className="todo-list__heading">Done:</h3>
      <ul className="todo-list"></ul>
    </section>
  );
});

export default TodoList;
