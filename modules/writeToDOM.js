import * as dom from "./getDOM";

export function addProjectToDOM(project) {
  console.log(project);
  const projectDOM = document.createElement("div");
  const projectName = document.createElement("div");
  const btnEdit = document.createElement("button");
  const btnDelete = document.createElement("button");

  projectName.textContent = project.getTitle();

  btnEdit.textContent = "Edit";
  btnDelete.textContent = "Delete";

  btnEdit.addEventListener("click", () => {});

  btnDelete.addEventListener("click", () => {
    dom.project_content.removeChild(projectDOM);
  });

  projectDOM.appendChild(projectName);
  projectDOM.appendChild(btnEdit);
  projectDOM.appendChild(btnDelete);
  dom.project_content.appendChild(projectDOM);
}
