const addTodo = () => {
  class Todo {
    constructor(title, desc, priority, date, status) {
      this.title = title;
      this.desc = desc;
      this.priority = priority;
      this.status = status;
      this.date = date;
    }
  }

  const title = document.querySelector("#todo-title").value;
  const desc = document.querySelector("#desc").value;
  const priority = document.querySelector(".priority").value;
  const date = document.querySelector("#date").value;

  const todo1 = new Todo(title, desc, priority, date, false);
  console.log(todo1);
};
export { addTodo };
