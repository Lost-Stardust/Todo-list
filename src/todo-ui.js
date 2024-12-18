import { storedList, todoList } from "./add-todo";
import { editPopup } from "./edit-popup";
import editIcon from "../visual-assets/editing.png";
import trashIcon from "../visual-assets/trash-bin.png";
let index;
const makeTodo = (todoInfo) => {
  console.log({ todoInfo });

  const todo = document.createElement("div");
  todo.className = "todo";
  const projectDisplay = document.querySelector(
    `.${todoInfo.project}`.replace(/\s/g, "")
  );
  console.log(projectDisplay);
  projectDisplay.appendChild(todo);
  todo.dataset.index = todoList.indexOf(todoInfo);

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
  edit.src = editIcon;
  otherInfo.appendChild(edit);

  const trash = document.createElement("img");
  trash.className = "trash";
  trash.src = trashIcon;
  otherInfo.appendChild(trash);

  trash.addEventListener("click", (e) => {
    e.target.parentNode.parentNode.parentNode.removeChild(
      e.target.parentNode.parentNode
    );
    let index = e.target.parentNode.parentNode.dataset.index;
    todoList.splice(index, 1);
    console.log(todoList);

    // Update data-index of todos
    let todos = document.querySelectorAll(".todo");
    console.log(todos);
    let n = 0;
    todos.forEach((todo) => {
      todo.dataset.index = n;
      n++;
    });

    const list = JSON.parse(localStorage.getItem("todoList"));
    list.splice(index, 1);
    localStorage.setItem("todoList", JSON.stringify(list));
  });

  edit.addEventListener("click", (e) => {
    let indexValue = e.target.parentNode.parentNode.dataset.index;
    index = indexValue;
    console.log(index);
    console.log("edit listener triggered");
    editPopup();
  });
  checkbox.addEventListener("click", () => {
    if (checkbox.checked == true) {
      todoTitle.style.textDecoration = "line-through";
      todoDesc.style.textDecoration = "line-through";

      todoTitle.style.color = "grey";
      todoDesc.style.color = "grey";

      todoTitle.style.textDecorationThickness = "3px";
      todoDesc.style.textDecorationThickness = "3px";

      todoTitle.style.textDecorationColor = "#7b2cbf";
      todoDesc.style.textDecorationColor = "#7b2cbf";
    } else {
      todoTitle.style.textDecoration = "none";
      todoDesc.style.textDecoration = "none";

      todoTitle.style.color = "black";
      todoDesc.style.color = "black";
    }
  });
};
export { makeTodo };
export { index };
