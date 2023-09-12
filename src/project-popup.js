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

  add.addEventListener("click", () => {
    body.appendChild(popup);
    body.appendChild(overlay);
  });
};
export { projectPopup };
