import "./styles.css";
import "./sidebar";
import { sidebarSlide } from "./sidebar";
import { projectPopup } from "./project-popup";
import { todoPopup } from "./todo-popup";
import { makeTodo } from "./todo-ui";
import { todoList } from "./add-todo";
import { makeProject } from "./project-ui";
import { projectList } from "./add-project";
sidebarSlide();
projectPopup();
todoPopup();

// Retrieve stored projects and create them

const storedProjs = JSON.parse(localStorage.getItem("projList"));
if (storedProjs.length !== 0) {
  storedProjs.forEach((proj) => {
    projectList.push(proj);
    console.log(projectList);
    makeProject(proj);
  });
}

// Retrieve stored todos and create them
const storedList = JSON.parse(localStorage.getItem("todoList"));
console.log(storedList);
if (storedList.length !== 0) {
  storedList.forEach((todo) => {
    todoList.push(todo);
    makeTodo(todo);
  });
}
