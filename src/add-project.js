import { makeProject } from "./project-ui";
// import { projectList } from ".";

let projectList = [
  // projects made will be stored here
];

// variable that will represent stored projectList in local storage
let storedProjs;

const addProject = () => {
  class Project {
    constructor(name) {
      this.name = name;
    }
  }
  const projectName = document.querySelector("#project-title").value;

  const project = new Project(projectName);
  project.name = projectName;
  console.log(project);

  projectList.push(project);
  makeProject(project);

  // Retrieve the projList in local storage
  // Update it with the new project that is created

  storedProjs = JSON.parse(localStorage.getItem("projList"));
  storedProjs.push(project);
  localStorage.setItem("projList", JSON.stringify(storedProjs));
  console.log(storedProjs.length);

  console.log(projectList);
};

// add projList to localStorage if it doesnt exist
if (!localStorage.getItem("projList")) {
  localStorage.setItem("projList", JSON.stringify(projectList));
}

export { addProject };
export { projectList };

// Project name will be taken from popup input
