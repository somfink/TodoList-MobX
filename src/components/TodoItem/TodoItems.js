import { observer } from "mobx-react";
import { TodoStore } from "../../store/TodoStore";
import { MdDone, MdClear } from "react-icons/md";
import "./TodoItems.css";

const TodoItems = observer(() => {
  // const addDoneTodoHandler = (item) => {
  //   const updatedTodoStatus = item.status = 'success';
  //   TodoStore.addDoneTodo(updatedTodoStatus);
  // }
  const todoItems = TodoStore.todos.map((item) => (
    <li className="todo-item" key={item.id}>
      {item.value}
      <div className="todo-item__icon-container">
        <MdDone
          className="todo-item__icon"
          onClick={() => TodoStore.addDoneTodo(item)}
        />
        <MdClear
          className="todo-item__icon"
          onClick={() => TodoStore.removeTodo(item)}
        />
      </div>
    </li>
  ));
  return <>{todoItems}</>;
});

export default TodoItems;
