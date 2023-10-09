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

  const title = document.querySelector("#name");
  const desc = document.querySelector("#desc");
  const priority = document.querySelector(".priority");
  const date = document.querySelector("#date");

  const todo1 = new Todo(title, desc, priority, date, false);
  console.log(todo1);
};
