import { action, makeObservable, observable } from "mobx";

class TodoStoreImpl {
  todos = [];
  doneTodos = [];

  constructor() {
    makeObservable(this, {
      todos: observable,
      doneTodos: observable,
      addTodo: action,
      removeTodo: action,
    });
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodo(todo) {
    this.todos = this.todos.filter((item) => item.id !== todo.id);
  }

  addDoneTodo(todo) {
    this.doneTodos.push(todo);
    this.todos = this.todos.filter((item) => item.id !== todo.id);
  }

  removeDoneTodo(todo) {
    this.doneTodos = this.doneTodos.filter((item) => item.id !== todo.id);
  }
}

export const TodoStore = new TodoStoreImpl();

export default TodoStoreImpl;
