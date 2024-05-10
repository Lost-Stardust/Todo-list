import { todoList } from "./add-todo";
import { editPopup } from "./edit-popup";
let todoInfo = {};
let index;
const makeTodo = () => {
  todoInfo.title = document.querySelector("#todo-title").value;
  todoInfo.desc = document.querySelector("#desc").value;
  todoInfo.priority = document.querySelector(".priority").value;
  todoInfo.date = document.querySelector("#date").value;
  todoInfo.project = document.querySelector("#projectSelect").value;
  console.log({ todoInfo });

  const todo = document.createElement("div");
  todo.className = "todo";
  const projectDisplay = document.querySelector(
    `.${todoInfo.project}`.replace(/\s/g, "")
  );
  console.log(projectDisplay);
  projectDisplay.appendChild(todo);
  todo.dataset.index = todoList.length;

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
  todoTitle.textContent = todoInfo.title;
  titleWrapper.appendChild(todoTitle);

  const todoDesc = document.createElement("p");
  todoDesc.className = "desc";
  todoDesc.textContent = todoInfo.desc;
  titleWrapper.appendChild(todoDesc);

  const todoDate = document.createElement("p");
  todoDate.className = "todo-date";
  todoDate.textContent = todoInfo.date;
  otherInfo.appendChild(todoDate);

  const todoPriority = document.createElement("p");
  todoPriority.className = "todo-priority";
  todoPriority.textContent = todoInfo.priority;
  otherInfo.appendChild(todoPriority);

  const edit = document.createElement("img");
  edit.className = "edit";
  edit.src = "../visual-assets/editing.png";
  otherInfo.appendChild(edit);

  const trash = document.createElement("img");
  trash.className = "trash";
  trash.src = "../visual-assets/trash-bin.png";
  otherInfo.appendChild(trash);

  trash.addEventListener("click", (e) => {
    e.target.parentNode.parentNode.parentNode.removeChild(
      e.target.parentNode.parentNode
    );
    let index = e.target.parentNode.parentNode.dataset.index;
    todoList.splice(index, 1);
    console.log(todoList);
  });

  edit.addEventListener("click", (e) => {
    let indexValue = e.target.parentNode.parentNode.dataset.index;
    index = indexValue;
    console.log(index);
    console.log("edit listener triggered");
    editPopup();
  });
};
export { todoInfo };
export { makeTodo };
export { index };
