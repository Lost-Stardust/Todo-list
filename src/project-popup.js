import { addProject } from "./add-project";
const projectPopup = () => {
  const add = document.querySelector(".add-project");
  const body = document.querySelector("body");
  const popup = document.createElement("div");
  popup.className = "popup";

  const form = document.createElement("form");
  form.setAttribute("method", "post");
  popup.appendChild(form);

  const label = document.createElement("label");
  label.setAttribute("for", "name");
  label.textContent = "Name";
  form.appendChild(label);

  const projectName = document.createElement("input");
  projectName.setAttribute("type", "text");
  projectName.setAttribute("id", "name");
  projectName.setAttribute("name", "name");
  form.appendChild(projectName);

  const overlay = document.createElement("div");
  overlay.className = "overlay";

  const title = document.createElement("h3");
  title.textContent = "Add project";
  popup.insertBefore(title, form);

  const buttons = document.createElement("div");
  buttons.className = "buttons";
  form.appendChild(buttons);

  const cancel = document.createElement("button");
  cancel.textContent = "Cancel";
  cancel.className = "cancel";
  buttons.appendChild(cancel);

  const confirm = document.createElement("button");
  confirm.textContent = "Add";
  confirm.className = "add";
  buttons.appendChild(confirm);
  body.appendChild(popup);
  body.appendChild(overlay);

  add.addEventListener("click", () => {
    popup.classList.add("active");
    overlay.classList.add("active");
  });

  cancel.addEventListener("click", () => {
    event.preventDefault();
    popup.classList.remove("active");
    overlay.classList.remove("active");
  });
  addProject();
  confirm.addEventListener("click", () => {
    event.preventDefault();
    addProject();
  });
};
export { projectPopup };
