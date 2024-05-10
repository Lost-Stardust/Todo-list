import { todoList } from "./add-todo";
import { index } from "./todo-ui";
const editTodo = () => {
  console.log(todoList[index]);
  const title = document.querySelector("#edit-title").value;
  const desc = document.querySelector("#edit-desc").value;
  const date = document.querySelector("#edit-date").value;
  const priority = document.querySelector(".edit-priority").value;
  const project = document.querySelector("#edit-projectSelect").value;
  // console.log({ title, desc, date, priority, project });

  const selectedTodo = todoList[index];
  selectedTodo.title = title;
  selectedTodo.desc = desc;
  selectedTodo.date = date;
  selectedTodo.priority = priority;
  console.log(selectedTodo);

  const todo = document.querySelector(`.todo[data-index="${index}"]`);
  console.log(todo);

  if (selectedTodo.project !== project) {
    selectedTodo.project = project;
    const projectDisplay = document.querySelector(
      `.${project}`.replace(/\s/g, "")
    );
    projectDisplay.appendChild(todo);
  }

  const editTitle = todo.querySelector(".todo-title");
  const editDesc = todo.querySelector(".desc");
  const editDate = todo.querySelector(".todo-date");
  const editPriority = todo.querySelector(".todo-priority");
  console.log(editTitle, editDesc, editDate, editPriority);

  editTitle.textContent = title;
  editDesc.textContent = desc;
  editDate.textContent = date;
  editPriority.textContent = priority;
};
export { editTodo };
