const main_DOM = document.querySelector("main");
const project_content = main_DOM.querySelector("#project-list");
const task_content = main_DOM.querySelector("#task-list");
const btnProjectDialog = main_DOM.querySelector("#newProject");
const btnTaskDialog = main_DOM.querySelector("#newTask");
const btnProjectConfirm = main_DOM.querySelector("#projectConfirm");
const btnProjectCancel = main_DOM.querySelector("#projectCancel");
const btnTaskConfirm = main_DOM.querySelector("#taskConfirm");
const btnTaskCancel = main_DOM.querySelector("#taskCancel");
const dialogProject = main_DOM.querySelector("#dialogProject");
const dialogTask = main_DOM.querySelector("#dialogTask");
const projectName = main_DOM.querySelector("#projectName");
const dialogEditProject = main_DOM.querySelector("#edit-project");
const oldName = main_DOM.querySelector("#oldName");
const newProjectName = main_DOM.querySelector("#newProjectName");
const btnProjectEditCancel = main_DOM.querySelector("#projectEditCancel");
const btnProjectEditConfirm = main_DOM.querySelector("#projectEditConfirm");


export {
  project_content,
  task_content,
  btnProjectDialog,
  btnTaskDialog,
  btnProjectConfirm,
  btnProjectCancel,
  btnTaskConfirm,
  btnTaskCancel,
  dialogProject,
  dialogTask,
  projectName,
  dialogEditProject,
  oldName,
  newProjectName,
  btnProjectEditCancel,
  btnProjectEditConfirm,
};
