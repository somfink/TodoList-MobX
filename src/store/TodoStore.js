import { action, makeObservable, observable } from "mobx";

class TodoStoreImpl {
  todos = [];

  constructor() {
    makeObservable(this, {
      todos: observable,
      addTodo: action,
      removeTodo: action,
    });
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodo() {

  }
}

export const TodoStore = new TodoStoreImpl();

export default TodoStoreImpl;
