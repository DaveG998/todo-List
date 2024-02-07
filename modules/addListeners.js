import * as DOM from "./getDOM";
import createProject from "./createNewProject";
import { addProjectToDOM } from "./writeToDOM";
import Project from "./project";

export function setupEventListeners() {
  DOM.btnProjectDialog.addEventListener("click", funcDialogProject);
  DOM.btnProjectConfirm.addEventListener("click", funcProjectConfirm);
  DOM.btnProjectCancel.addEventListener("click", funcProjectCancel);
  DOM.btnTaskDialog.addEventListener("click", funcTaskDialog);
  DOM.btnTaskConfirm.addEventListener("click", funcTaskConfirm);
  DOM.btnTaskCancel.addEventListener("click", funcTaskCancel);
}

function funcDialogProject() {
  DOM.dialogProject.show();
}

function funcProjectCancel() {
  DOM.dialogProject.close();
}

function funcProjectConfirm() {
  if (DOM.projectName.value != "") {
    const project = new Project(DOM.projectName.value);
    addProjectToDOM(project);
  }
}

function funcTaskDialog() {
  DOM.dialogTask.show();
}

function funcTaskConfirm() {}

function funcTaskCancel() {
  DOM.dialogTask.close();
}
