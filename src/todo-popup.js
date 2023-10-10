import { projectList } from "./add-project";
import { addTodo } from "./add-todo";
const todoPopup = () => {
  const add = document.querySelector(".add-todo");
  const body = document.querySelector("body");
  const popup = document.createElement("div");
  popup.className = "todo-popup";

  const form = document.createElement("form");
  form.setAttribute("method", "post");
  popup.appendChild(form);

  const todoName = document.createElement("input");
  todoName.setAttribute("type", "text");
  todoName.setAttribute("id", "todo-title");
  todoName.setAttribute("name", "todo-title");
  todoName.setAttribute("placeholder", "Task name");
  form.appendChild(todoName);

  const todoDesc = document.createElement("input");
  todoDesc.setAttribute("type", "text");
  todoDesc.setAttribute("id", "desc");
  todoDesc.setAttribute("name", "desc");
  todoDesc.setAttribute("placeholder", "Description");
  form.appendChild(todoDesc);

  const overlay = document.querySelector(".overlay");

  const buttons = document.createElement("div");
  buttons.className = "buttons";
  form.appendChild(buttons);

  const leftBtns = document.createElement("div");
  leftBtns.className = "leftBtns";
  buttons.appendChild(leftBtns);

  const rightBtns = document.createElement("div");
  rightBtns.className = "rightBtns";
  buttons.appendChild(rightBtns);

  const date = document.createElement("input");
  date.setAttribute("type", "date");
  date.setAttribute("id", "date");
  date.setAttribute("name", "date");
  leftBtns.appendChild(date);

  const priority = document.createElement("select");
  priority.textContent = "Priority";
  const high = document.createElement("option");
  const medium = document.createElement("option");
  const low = document.createElement("option");
  high.textContent = "high";
  medium.textContent = "medium";
  low.textContent = "low";
  priority.className = "priority";
  priority.appendChild(high);
  priority.appendChild(medium);
  priority.appendChild(low);
  leftBtns.appendChild(priority);

  const cancel = document.createElement("button");
  cancel.textContent = "Cancel";
  cancel.className = "cancel";
  rightBtns.appendChild(cancel);

  const confirm = document.createElement("button");
  confirm.textContent = "Add";
  confirm.className = "add";
  rightBtns.appendChild(confirm);

  const dropdowns = document.createElement("div");
  dropdowns.className = "dropdowns";
  buttons.insertAdjacentElement("afterend", dropdowns);

  const projectSelect = document.createElement("select");
  dropdowns.appendChild(projectSelect);
  projectSelect.setAttribute("name", "projectSelect");
  projectSelect.id = "projectSelect";

  add.addEventListener("click", () => {
    popup.classList.add("active");
    overlay.classList.add("active");
    for (let i = 0; i < projectList.length; i++) {
      const option = document.createElement("option");
      option.textContent = projectList[i].name;
      projectSelect.appendChild(option);
    }
  });

  cancel.addEventListener("click", () => {
    event.preventDefault();
    popup.classList.remove("active");
    overlay.classList.remove("active");
    projectSelect.replaceChildren();
  });

  confirm.addEventListener("click", () => {
    event.preventDefault();
    popup.classList.remove("active");
    overlay.classList.remove("active");
    projectSelect.replaceChildren();

    addTodo();
  });

  priority.addEventListener("click", () => {
    event.preventDefault();
  });

  body.appendChild(popup);
};
export { todoPopup };
