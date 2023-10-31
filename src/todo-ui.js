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
};
export { makeTodo };
