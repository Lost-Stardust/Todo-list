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

  const todo = document.createElement("div");
  todo.className = "todo";
  const content = document.querySelector(".content");
  content.appendChild(todo);

  const otherInfo = document.createElement("div");
  todo.appendChild(otherInfo);
  otherInfo.className = "other-info";

  const titleBox = document.createElement("div");
  todo.appendChild(titleBox);
  titleBox.className = "title-box";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "checkbox";
  titleBox.appendChild(checkbox);

  const titleWrapper = document.createElement("div");
  titleWrapper.className = "title-wrapper";
  titleBox.appendChild(titleWrapper);

  const todoTitle = document.createElement("p");
  todoTitle.className = "todo-title";
  todoTitle.textContent = todo1.title;
  titleWrapper.appendChild(todoTitle);

  const todoDesc = document.createElement("p");
  todoDesc.className = "desc";
  todoDesc.textContent = todo1.desc;
  titleWrapper.appendChild(todoDesc);

  const todoDate = document.createElement("p");
  todoDate.className = "todo-date";
  todoDate.textContent = todo1.date;
  otherInfo.appendChild(todoDate);

  const todoPriority = document.createElement("p");
  todoPriority.className = "todo-priority";
  todoPriority.textContent = todo1.priority;
  otherInfo.appendChild(todoPriority);

  const edit = document.createElement("img");
  edit.className = "edit";
  edit.src = "../visual-assets/editing.png";
  otherInfo.appendChild(edit);
};
export { addTodo };
