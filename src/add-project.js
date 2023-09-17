import { makeProject } from "./project-ui";
const projectList = [];
const addProject = () => {
  const projectName = document.querySelector("#name").value;
  const project = {};
  project.name = projectName;

  projectList.push(project);
  makeProject();
};
export { addProject };
export { projectList };

// Project name will be taken from popup input
