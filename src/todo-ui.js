const makeTodo = () => {
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

  const title = document.createElement("p");
  title.className = "p";
  title.textContent = "dummy text";
  titleWrapper.appendChild(title);

  const desc = document.createElement("p");
  desc.className = "desc";
  desc.textContent = "dummy description with no purpose";
  titleWrapper.appendChild(desc);

  const date = document.createElement("p");
  date.className = "todo-date";
  date.textContent = "date here";
  otherInfo.appendChild(date);

  const priority = document.createElement("p");
  priority.className = "todo-priority";
  priority.textContent = "priority";
  otherInfo.appendChild(priority);
};
export { makeTodo };
