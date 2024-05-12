import { makeProject } from "./project-ui";
// import { projectList } from ".";

let projectList = [];
const defaultProject = {
  name: "Default",
};
// projList that will not be emptied, will be used as
// replacement for projectList in localStorage
const projList = [];
// add projList to localStorage if it doesnt exist
if (!localStorage.getItem("projList")) {
  localStorage.setItem("projList", JSON.stringify(projList));
}
const addProject = () => {
  const projectName = document.querySelector("#project-title").value;
  const project = {};
  project.name = projectName;

  projectList.push(project);
  projList.push(project);
  makeProject(projectList);
  projectList = [];
  console.log(projList);
};
export { addProject };
export { projectList };
export { projList };

// Project name will be taken from popup input
