import { projectList } from "./add-project";
const makeProject = () => {
  for (let i = 0; i < projectList.length; i++) {
    let project = document.createElement("button");
    project.className = "project";
    project.dataset.index = projectList.indexOf(projectList[i]);

    const projectContainer = document.querySelector(".projects-container");
    projectContainer.appendChild(project);

    project.textContent = projectList[i].name;
    console.log(project);

    // Create div for each project to display its respective todos in
    const pDisplay = document.createElement("div");
    // remove whitespace from textcontent to use as class name
    pDisplay.className = projectList[i].name.replace(/\s/g, "");
    pDisplay.dataset.index = projectList.indexOf(projectList[i]);

    const content = document.querySelector(".content");
    content.appendChild(pDisplay);
    console.log(pDisplay);

    // const defaultProject = document.querySelector(".Default");
    // defaultProject.classList.add("active");
    // console.log(defaultProject);

    project.addEventListener("click", (e) => {
      // remove whitespace from textContent to use as selector
      const name = project.textContent.replace(/\s/g, "");
      const pDisplay = document.querySelector(`.${name}`);

      // Select all poject display divs and remove active class for all
      const otherDisplays = content.querySelectorAll("div");
      otherDisplays.forEach((d) => {
        d.classList.remove("active");
      });
      // assign active class to clicked project's div
      pDisplay.classList.add("active");
    });
  }
  const projectBtns = document.querySelectorAll(".project");
  console.log([projectBtns]);
  const remove = document.createElement("button");
  remove.className = "remove";

  projectBtns.forEach((btn) => {
    btn.appendChild(remove);
  });

  remove.addEventListener("click", (e) => {
    let name = e.target.parentNode.textContent.replace(/\s/g, "");
    let display = document.querySelector(`.${name}`);
    display.remove();
    e.target.parentNode.remove();
    e.stopPropagation();
  });

  console.log(projectList);
};

// Create button for default project
let project = document.createElement("button");
project.className = "project";
// project.dataset.index = projectList.indexOf(projectList[i]);
const projectContainer = document.querySelector(".projects-container");
projectContainer.appendChild(project);

project.textContent = "Default";
console.log(project);

// Create display div for default project
const pDisplay = document.createElement("div");
pDisplay.className = "Default";
// pDisplay.dataset.index = projectList.indexOf(projectList[i]);

const content = document.querySelector(".content");
content.appendChild(pDisplay);

const defaultProject = document.querySelector(".Default");
defaultProject.classList.add("active");
console.log(defaultProject);

project.addEventListener("click", (e) => {
  // Select all poject display divs and remove active class for all
  const otherDisplays = content.querySelectorAll("div");
  otherDisplays.forEach((d) => {
    d.classList.remove("active");
  });
  // assign active class to clicked project's div
  pDisplay.classList.add("active");
});

export { makeProject };
