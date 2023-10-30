import { makeProject } from "./project-ui";
// import { projectList } from ".";

const projectList = [];
const defaultProject = {
  name: "Default",
};
projectList.push(defaultProject);
makeProject();
const addProject = () => {
  const projectName = document.querySelector("#project-title").value;
  const project = {};
  project.name = projectName;

  projectList.push(project);
  makeProject();
};
export { addProject };
export { projectList };

// Project name will be taken from popup input
