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
  todoName.setAttribute("id", "name");
  todoName.setAttribute("name", "name");
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

  const priority = document.createElement("button");
  priority.textContent = "Priority";
  priority.className = "priority";
  leftBtns.appendChild(priority);

  const cancel = document.createElement("button");
  cancel.textContent = "Cancel";
  cancel.className = "cancel";
  rightBtns.appendChild(cancel);

  const confirm = document.createElement("button");
  confirm.textContent = "Add";
  confirm.className = "add";
  rightBtns.appendChild(confirm);

  add.addEventListener("click", () => {
    popup.classList.add("active");
    overlay.classList.add("active");
  });

  cancel.addEventListener("click", () => {
    event.preventDefault();
    popup.classList.remove("active");
    overlay.classList.remove("active");
  });

  confirm.addEventListener("click", () => {
    event.preventDefault();
    popup.classList.remove("active");
    overlay.classList.remove("active");
  });

  body.appendChild(popup);
};
export { todoPopup };
