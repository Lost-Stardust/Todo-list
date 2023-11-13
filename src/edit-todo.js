import { todoList } from "./add-todo";
const editTodo = () => {
  const edit = document.querySelector(".edit");
  edit.addEventListener("click", (e) => {
    console.log(e.target.parentNode.parentNode.dataset.index);
  });
};
export { editTodo };
