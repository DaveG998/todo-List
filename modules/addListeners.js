import {
  btnTaskDialog,
  btnProjectConfirm,
  btnProjectCancel,
  btnTaskConfirm,
  btnTaskCancel,
  dialogProject,
  dialogTask,
  btnProjectDialog,
  projectName,
} from "./getDOM";
import createProject from "./createNewProject";
import { addProjectToDOM } from "./writeToDOM";
import Project from "./project";

export function setupEventListeners() {
  btnProjectDialog.addEventListener("click", funcDialogProject);
  btnProjectConfirm.addEventListener("click", funcProjectConfirm);
  btnProjectCancel.addEventListener("click", funcProjectCancel);
  btnTaskDialog.addEventListener("click", funcTaskDialog);
  btnTaskConfirm.addEventListener("click", funcTaskConfirm);
  btnTaskCancel.addEventListener("click", funcTaskCancel);
}

function funcDialogProject() {
  dialogProject.show();
}

function funcProjectCancel() {
  dialogProject.close();
}

function funcProjectConfirm() {
  if (projectName.value != "") {
    const project = new Project(projectName.value);
    addProjectToDOM(project);
  }
}

function funcTaskDialog() {
  dialogTask.show();
}

function funcTaskConfirm() {}

function funcTaskCancel() {
  dialogTask.close();
}
