import { projectList } from "./add-project";
const makeProject = (project) => {
  let projectbtn = document.createElement("button");
  projectbtn.className = "project";
  projectbtn.dataset.index = projectList.indexOf(project);

  const projectContainer = document.querySelector(".projects-container");
  projectContainer.appendChild(projectbtn);

  projectbtn.textContent = project.name;
  console.log(projectbtn);

  // Create div for each project to display its respective todos in
  const pDisplay = document.createElement("div");
  // remove whitespace from textcontent to use as class name
  pDisplay.className = project.name.replace(/\s/g, "");
  pDisplay.dataset.index = projectList.indexOf(project);

  const content = document.querySelector(".content");
  content.appendChild(pDisplay);
  console.log(pDisplay);

  // const defaultProject = document.querySelector(".Default");
  // defaultProject.classList.add("active");
  // console.log(defaultProject);

  projectbtn.addEventListener("click", (e) => {
    // remove whitespace from textContent to use as selector
    const name = project.name.replace(/\s/g, "");
    const pDisplay = document.querySelector(`.${name}`);

    // Select all poject display divs and remove active class for all
    const otherDisplays = content.querySelectorAll("div");
    otherDisplays.forEach((d) => {
      d.classList.remove("active");
    });
    // assign active class to clicked project's div
    pDisplay.classList.add("active");
  });

  // Create and append remove button to project
  const remove = document.createElement("button");
  remove.className = "remove";
  projectbtn.appendChild(remove);

  remove.addEventListener("click", (e) => {
    let name = e.target.parentNode.textContent.replace(/\s/g, "");
    let display = document.querySelector(`.${name}`);
    display.remove();
    e.target.parentNode.remove();
    e.stopPropagation();

    let index = e.target.parentNode.dataset.index;
    console.log(index);
    projectList.splice(index, 1);
    console.log(projectList);

    // delete project from local storage
    const list = JSON.parse(localStorage.getItem("projList"));
    list.splice(index, 1);
    localStorage.setItem("projList", JSON.stringify(list));

    // correct data index of project buttons
    let defaultp = projectContainer.querySelector(".project");
    defaultp.classList.add("defaultProject");
    console.log(defaultp);
    let projs = document.querySelectorAll(".project:not(.defaultProject)");
    console.log(projs);
    let n = 0;
    projs.forEach((btn) => {
      btn.dataset.index = n;
      n++;
    });
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
