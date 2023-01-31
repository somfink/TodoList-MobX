import { observer } from "mobx-react";
import { TodoStore } from "../../store/TodoStore";
import { MdDone, MdClear } from "react-icons/md";
import "../TodoItem/TodoItems.css";

const DoneTodoItems = observer(() => {
  const todoItems = TodoStore.doneTodos.map((item) => (
    <li className="todo-item" key={item.id}>
      {item.value}

      <MdClear
        className="todo-item__icon"
        onClick={() => TodoStore.removeDoneTodo(item)}
      />
    </li>
  ));
  return <>{todoItems}</>;
});

export default DoneTodoItems;
