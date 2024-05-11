import "./styles.css";
import "./sidebar";
import { sidebarSlide } from "./sidebar";
import { projectPopup } from "./project-popup";
import { todoPopup } from "./todo-popup";
import { makeTodo } from "./todo-ui";
import { todoList } from "./add-todo";
sidebarSlide();
projectPopup();
todoPopup();

// check if local storage's todoList array is empty
const storedList = JSON.parse(localStorage.todoList);
console.log(storedList);
if (storedList.length !== 0) {
  storedList.forEach((todo) => {
    todoList.push(todo);
    makeTodo(todo);
  });
}
