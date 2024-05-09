let todoInfo = {};
const makeTodo = () => {
  todoInfo.title = document.querySelector("#todo-title").value;
  todoInfo.desc = document.querySelector("#desc").value;
  todoInfo.priority = document.querySelector(".priority").value;
  todoInfo.date = document.querySelector("#date").value;
  todoInfo.project = document.querySelector("#projectSelect").value;
  console.log(
    todoInfo.title,
    todoInfo.desc,
    todoInfo.priority,
    todoInfo.date,
    todoInfo.project
  );
};
export { todoInfo };
export { makeTodo };
