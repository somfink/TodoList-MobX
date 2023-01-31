import TodoList from "../TodoList/TodoList";
import "./Todo.css";
import { TodoStore } from "../../store/TodoStore";
import { useState } from "react";

const Todo = () => {
  const [todoInput, setTodoInput] = useState("");
  const changeInputHandler = (e) => {
    setTodoInput(e.target.value);
  };

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!todoInput) {
      return;
    }
    TodoStore.addTodo({value: todoInput, id: crypto.randomUUID()});
    setTodoInput("");
  };

  return (
    <>
      <header className="todo">
        <h1 className="todo__heading">Todo List</h1>
        <form className="todo__form" onSubmit={addTodoHandler}>
          <input
            type="text"
            placeholder="Create a new todo..."
            className="todo__input"
            onChange={changeInputHandler}
            value={todoInput}
          />
          <button className="todo__button">Add</button>
        </form>
      </header>
      <TodoList />
    </>
  );
};

export default Todo;
