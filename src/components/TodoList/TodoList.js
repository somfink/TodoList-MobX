import { observer } from "mobx-react";
import { TodoStore } from "../../store/TodoStore";
import DoneTodoItems from "../DoneTodoItems/DoneTodoItems";
import TodoItems from "../TodoItem/TodoItems";

import "./TodoList.css";

const TodoList = observer(() => {
  const doneTodoTasks = TodoStore.doneTodos ? (
    <>
      <h3 className="todo-list__heading">Done:</h3>
      <ul className="todo-list">
        <DoneTodoItems />
      </ul>
    </>
  ) : null;

  return (
    <section className="todo-container">
      <h3 className="todo-list__heading">Pending:</h3>
      <ul className="todo-list">
        <TodoItems />
      </ul>
      {doneTodoTasks}
    </section>
  );
});

export default TodoList;
