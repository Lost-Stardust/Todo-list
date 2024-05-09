const makeTodo = () => {
  const title = document.querySelector("#todo-title").value;
  const desc = document.querySelector("#desc").value;
  const priority = document.querySelector(".priority").value;
  const date = document.querySelector("#date").value;
  const project = document.querySelector("#projectSelect").value;
  console.log({ title, desc, priority, date, project });
};

export { makeTodo };
