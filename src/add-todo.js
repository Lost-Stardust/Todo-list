import { makeTodo } from "./todo-ui";
const todoList = [
  // Todos made will be stored in here
];

const addTodo = () => {
  class Todo {
    constructor(title, desc, priority, date, project) {
      this.title = title;
      this.desc = desc;
      this.priority = priority;
      this.project = project;
      this.date = date;
    }
  }

  const title = document.querySelector("#todo-title").value;
  const desc = document.querySelector("#desc").value;
  const priority = document.querySelector(".priority").value;
  const date = document.querySelector("#date").value;
  const project = document.querySelector("#projectSelect").value;

  const todo1 = new Todo(title, desc, priority, date, project);
  console.log(todo1);

  todoList.push(todo1);
  console.log(todoList);

  makeTodo(todo1);
};
export { addTodo };
export { todoList };
