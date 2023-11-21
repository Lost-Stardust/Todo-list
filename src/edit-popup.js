import { projectList } from "./add-project";
import { editTodo } from "./edit-todo";

const editPopup = () => {
  const edit = document.querySelector(".edit");
  const body = document.querySelector("body");
  const popup = document.createElement("div");
  popup.className = "edit-popup";

  const form = document.createElement("form");
  form.setAttribute("method", "post");
  popup.appendChild(form);

  const editName = document.createElement("input");
  editName.setAttribute("type", "text");
  editName.setAttribute("id", "edit-title");
  editName.setAttribute("name", "edit-title");
  editName.setAttribute("placeholder", "Task name");
  form.appendChild(editName);

  const editDesc = document.createElement("input");
  editDesc.setAttribute("type", "text");
  editDesc.setAttribute("id", "edit-desc");
  editDesc.setAttribute("name", "edit-desc");
  editDesc.setAttribute("placeholder", "Description");
  form.appendChild(editDesc);

  const overlay = document.querySelector(".overlay");

  const buttons = document.createElement("div");
  buttons.className = "buttons";
  form.appendChild(buttons);

  const leftBtns = document.createElement("div");
  leftBtns.className = "leftBtns";
  buttons.appendChild(leftBtns);

  const rightBtns = document.createElement("div");
  rightBtns.className = "rightBtns";
  buttons.appendChild(rightBtns);

  const editDate = document.createElement("input");
  editDate.setAttribute("type", "date");
  editDate.setAttribute("id", "edit-date");
  editDate.setAttribute("name", "edit-date");
  leftBtns.appendChild(editDate);

  const editPriority = document.createElement("select");
  editPriority.textContent = "editPriority";
  const high = document.createElement("option");
  const medium = document.createElement("option");
  const low = document.createElement("option");
  high.textContent = "high";
  medium.textContent = "medium";
  low.textContent = "low";
  editPriority.className = "edit-priority";
  editPriority.appendChild(high);
  editPriority.appendChild(medium);
  editPriority.appendChild(low);
  leftBtns.appendChild(editPriority);

  const cancel = document.createElement("button");
  cancel.textContent = "Cancel";
  cancel.className = "edit-cancel";
  rightBtns.appendChild(cancel);

  const confirm = document.createElement("button");
  confirm.textContent = "edit";
  confirm.className = "edit-confirm";
  rightBtns.appendChild(confirm);

  const dropdowns = document.createElement("div");
  dropdowns.className = "edit-dropdowns";
  buttons.insertAdjacentElement("afterend", dropdowns);

  const projectSelect = document.createElement("select");
  dropdowns.appendChild(projectSelect);
  projectSelect.setAttribute("name", "projectSelect");
  projectSelect.id = "edit-projectSelect";

  // Activate popup

  popup.classList.add("active");
  overlay.classList.add("active");
  projectSelect.replaceChildren();
  for (let i = 0; i < projectList.length; i++) {
    const option = document.createElement("option");
    option.textContent = projectList[i].name;
    projectSelect.appendChild(option);
  }

  cancel.addEventListener("click", () => {
    event.preventDefault();
    popup.classList.remove("active");
    overlay.classList.remove("active");
    projectSelect.replaceChildren();
  });

  confirm.addEventListener("click", () => {
    event.preventDefault();
    popup.classList.remove("active");
    overlay.classList.remove("active");

    editTodo();
  });

  editPriority.addEventListener("click", () => {
    event.preventDefault();
  });

  body.appendChild(popup);
};
export { editPopup };
