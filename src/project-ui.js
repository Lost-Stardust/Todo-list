import { projectList } from "./add-project";
const makeProject = () => {
  for (let i = 0; i < projectList.length; i++) {
    let project = document.createElement("div");
    project.className = "project";
    project.dataset.index = projectList.indexOf(projectList[i]);

    const projectContainer = document.querySelector(".projects-container");
    projectContainer.appendChild(project);

    project.textContent = projectList[i].name;
    console.log(project);
  }

  console.log(projectList);
};
export { makeProject };
