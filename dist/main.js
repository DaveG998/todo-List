/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./modules/addListeners.js":
/*!*********************************!*\
  !*** ./modules/addListeners.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setupEventListeners: () => (/* binding */ setupEventListeners)
/* harmony export */ });
/* harmony import */ var _getDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDOM */ "./modules/getDOM.js");
/* harmony import */ var _createNewProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createNewProject */ "./modules/createNewProject.js");
/* harmony import */ var _writeToDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./writeToDOM */ "./modules/writeToDOM.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project */ "./modules/project.js");





function setupEventListeners() {
  _getDOM__WEBPACK_IMPORTED_MODULE_0__.btnProjectDialog.addEventListener("click", funcDialogProject);
  _getDOM__WEBPACK_IMPORTED_MODULE_0__.btnProjectConfirm.addEventListener("click", funcProjectConfirm);
  _getDOM__WEBPACK_IMPORTED_MODULE_0__.btnProjectCancel.addEventListener("click", funcProjectCancel);
  _getDOM__WEBPACK_IMPORTED_MODULE_0__.btnTaskDialog.addEventListener("click", funcTaskDialog);
  _getDOM__WEBPACK_IMPORTED_MODULE_0__.btnTaskConfirm.addEventListener("click", funcTaskConfirm);
  _getDOM__WEBPACK_IMPORTED_MODULE_0__.btnTaskCancel.addEventListener("click", funcTaskCancel);
}

function funcDialogProject() {
  _getDOM__WEBPACK_IMPORTED_MODULE_0__.dialogProject.show();
}

function funcProjectCancel() {
  _getDOM__WEBPACK_IMPORTED_MODULE_0__.dialogProject.close();
}

function funcProjectConfirm() {
  if (_getDOM__WEBPACK_IMPORTED_MODULE_0__.projectName.value != "") {
    const project = new _project__WEBPACK_IMPORTED_MODULE_3__["default"](_getDOM__WEBPACK_IMPORTED_MODULE_0__.projectName.value);
    (0,_writeToDOM__WEBPACK_IMPORTED_MODULE_2__.addProjectToDOM)(project);
  }
}

function funcTaskDialog() {
  _getDOM__WEBPACK_IMPORTED_MODULE_0__.dialogTask.show();
}

function funcTaskConfirm() {}

function funcTaskCancel() {
  _getDOM__WEBPACK_IMPORTED_MODULE_0__.dialogTask.close();
}


/***/ }),

/***/ "./modules/createNewProject.js":
/*!*************************************!*\
  !*** ./modules/createNewProject.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProject: () => (/* binding */ createProject)
/* harmony export */ });
/* harmony import */ var _getDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDOM */ "./modules/getDOM.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./modules/project.js");



function createProject() {
  const project = new _project__WEBPACK_IMPORTED_MODULE_1__["default"](_getDOM__WEBPACK_IMPORTED_MODULE_0__.projectName.value);
  return project;
}


/***/ }),

/***/ "./modules/getDOM.js":
/*!***************************!*\
  !*** ./modules/getDOM.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   btnProjectCancel: () => (/* binding */ btnProjectCancel),
/* harmony export */   btnProjectConfirm: () => (/* binding */ btnProjectConfirm),
/* harmony export */   btnProjectDialog: () => (/* binding */ btnProjectDialog),
/* harmony export */   btnTaskCancel: () => (/* binding */ btnTaskCancel),
/* harmony export */   btnTaskConfirm: () => (/* binding */ btnTaskConfirm),
/* harmony export */   btnTaskDialog: () => (/* binding */ btnTaskDialog),
/* harmony export */   dialogProject: () => (/* binding */ dialogProject),
/* harmony export */   dialogTask: () => (/* binding */ dialogTask),
/* harmony export */   projectName: () => (/* binding */ projectName),
/* harmony export */   project_content: () => (/* binding */ project_content),
/* harmony export */   task_content: () => (/* binding */ task_content)
/* harmony export */ });
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




/***/ }),

/***/ "./modules/project.js":
/*!****************************!*\
  !*** ./modules/project.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
class Project {
    constructor(title) {
        this.title = title;
        this.taskList = [];
    }

    getTitle() {
        return this.title;
    }

    getTaskList(){
        return this.taskList;
    }

    addTask(task) {
        this.taskList.push(task);
    }
}

/***/ }),

/***/ "./modules/writeToDOM.js":
/*!*******************************!*\
  !*** ./modules/writeToDOM.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProjectToDOM: () => (/* binding */ addProjectToDOM)
/* harmony export */ });
/* harmony import */ var _getDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDOM */ "./modules/getDOM.js");


function addProjectToDOM(project) {
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
    _getDOM__WEBPACK_IMPORTED_MODULE_0__.project_content.removeChild(projectDOM);
  });

  projectDOM.appendChild(projectName);
  projectDOM.appendChild(btnEdit);
  projectDOM.appendChild(btnDelete);
  _getDOM__WEBPACK_IMPORTED_MODULE_0__.project_content.appendChild(projectDOM);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_addListeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/addListeners */ "./modules/addListeners.js");
// import Project from "../project";
// import Task from "../modules/task";


(0,_modules_addListeners__WEBPACK_IMPORTED_MODULE_0__.setupEventListeners)();

// const defProject = new Project("Project 1");

// function createANewTask(title, description, priority) {
//   const firstToDo = new ToDo(title, description, priority);
//   defProject.addTask(firstToDo);
// }

// createANewTask("First", "Do smth please", "Low");
// createANewTask("Seceond", "Do smth else", "High");
// createANewTask("Third", ".. ... . ... ", "none");

// console.log(defProject.getTaskList());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVa0I7QUFDNkI7QUFDQTtBQUNmOztBQUV6QjtBQUNQLEVBQUUscURBQWdCO0FBQ2xCLEVBQUUsc0RBQWlCO0FBQ25CLEVBQUUscURBQWdCO0FBQ2xCLEVBQUUsa0RBQWE7QUFDZixFQUFFLG1EQUFjO0FBQ2hCLEVBQUUsa0RBQWE7QUFDZjs7QUFFQTtBQUNBLEVBQUUsa0RBQWE7QUFDZjs7QUFFQTtBQUNBLEVBQUUsa0RBQWE7QUFDZjs7QUFFQTtBQUNBLE1BQU0sZ0RBQVc7QUFDakIsd0JBQXdCLGdEQUFPLENBQUMsZ0RBQVc7QUFDM0MsSUFBSSw0REFBZTtBQUNuQjtBQUNBOztBQUVBO0FBQ0EsRUFBRSwrQ0FBVTtBQUNaOztBQUVBOztBQUVBO0FBQ0EsRUFBRSwrQ0FBVTtBQUNaOzs7Ozs7Ozs7Ozs7Ozs7OztBQy9DdUM7QUFDUDs7QUFFekI7QUFDUCxzQkFBc0IsZ0RBQU8sQ0FBQyxnREFBVztBQUN6QztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQWNFOzs7Ozs7Ozs7Ozs7Ozs7QUN6QmE7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNqQmdDOztBQUV6QjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSw0Q0FBNEM7QUFDNUM7QUFDQSxJQUFJLG9EQUFtQjtBQUN2QixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0RBQW1CO0FBQ3JCOzs7Ozs7O1VDdkJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQzhEOztBQUU5RCwwRUFBbUI7O0FBRW5COztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL21vZHVsZXMvYWRkTGlzdGVuZXJzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL21vZHVsZXMvY3JlYXRlTmV3UHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9tb2R1bGVzL2dldERPTS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9tb2R1bGVzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbW9kdWxlcy93cml0ZVRvRE9NLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBidG5UYXNrRGlhbG9nLFxuICBidG5Qcm9qZWN0Q29uZmlybSxcbiAgYnRuUHJvamVjdENhbmNlbCxcbiAgYnRuVGFza0NvbmZpcm0sXG4gIGJ0blRhc2tDYW5jZWwsXG4gIGRpYWxvZ1Byb2plY3QsXG4gIGRpYWxvZ1Rhc2ssXG4gIGJ0blByb2plY3REaWFsb2csXG4gIHByb2plY3ROYW1lLFxufSBmcm9tIFwiLi9nZXRET01cIjtcbmltcG9ydCBjcmVhdGVQcm9qZWN0IGZyb20gXCIuL2NyZWF0ZU5ld1Byb2plY3RcIjtcbmltcG9ydCB7IGFkZFByb2plY3RUb0RPTSB9IGZyb20gXCIuL3dyaXRlVG9ET01cIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwRXZlbnRMaXN0ZW5lcnMoKSB7XG4gIGJ0blByb2plY3REaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmNEaWFsb2dQcm9qZWN0KTtcbiAgYnRuUHJvamVjdENvbmZpcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmNQcm9qZWN0Q29uZmlybSk7XG4gIGJ0blByb2plY3RDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmNQcm9qZWN0Q2FuY2VsKTtcbiAgYnRuVGFza0RpYWxvZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY1Rhc2tEaWFsb2cpO1xuICBidG5UYXNrQ29uZmlybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY1Rhc2tDb25maXJtKTtcbiAgYnRuVGFza0NhbmNlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY1Rhc2tDYW5jZWwpO1xufVxuXG5mdW5jdGlvbiBmdW5jRGlhbG9nUHJvamVjdCgpIHtcbiAgZGlhbG9nUHJvamVjdC5zaG93KCk7XG59XG5cbmZ1bmN0aW9uIGZ1bmNQcm9qZWN0Q2FuY2VsKCkge1xuICBkaWFsb2dQcm9qZWN0LmNsb3NlKCk7XG59XG5cbmZ1bmN0aW9uIGZ1bmNQcm9qZWN0Q29uZmlybSgpIHtcbiAgaWYgKHByb2plY3ROYW1lLnZhbHVlICE9IFwiXCIpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdE5hbWUudmFsdWUpO1xuICAgIGFkZFByb2plY3RUb0RPTShwcm9qZWN0KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmdW5jVGFza0RpYWxvZygpIHtcbiAgZGlhbG9nVGFzay5zaG93KCk7XG59XG5cbmZ1bmN0aW9uIGZ1bmNUYXNrQ29uZmlybSgpIHt9XG5cbmZ1bmN0aW9uIGZ1bmNUYXNrQ2FuY2VsKCkge1xuICBkaWFsb2dUYXNrLmNsb3NlKCk7XG59XG4iLCJpbXBvcnQgeyBwcm9qZWN0TmFtZSB9IGZyb20gXCIuL2dldERPTVwiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdCgpIHtcbiAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3ROYW1lLnZhbHVlKTtcbiAgcmV0dXJuIHByb2plY3Q7XG59XG4iLCJjb25zdCBtYWluX0RPTSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuY29uc3QgcHJvamVjdF9jb250ZW50ID0gbWFpbl9ET00ucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWxpc3RcIik7XG5jb25zdCB0YXNrX2NvbnRlbnQgPSBtYWluX0RPTS5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stbGlzdFwiKTtcbmNvbnN0IGJ0blByb2plY3REaWFsb2cgPSBtYWluX0RPTS5xdWVyeVNlbGVjdG9yKFwiI25ld1Byb2plY3RcIik7XG5jb25zdCBidG5UYXNrRGlhbG9nID0gbWFpbl9ET00ucXVlcnlTZWxlY3RvcihcIiNuZXdUYXNrXCIpO1xuY29uc3QgYnRuUHJvamVjdENvbmZpcm0gPSBtYWluX0RPTS5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RDb25maXJtXCIpO1xuY29uc3QgYnRuUHJvamVjdENhbmNlbCA9IG1haW5fRE9NLnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdENhbmNlbFwiKTtcbmNvbnN0IGJ0blRhc2tDb25maXJtID0gbWFpbl9ET00ucXVlcnlTZWxlY3RvcihcIiN0YXNrQ29uZmlybVwiKTtcbmNvbnN0IGJ0blRhc2tDYW5jZWwgPSBtYWluX0RPTS5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tDYW5jZWxcIik7XG5jb25zdCBkaWFsb2dQcm9qZWN0ID0gbWFpbl9ET00ucXVlcnlTZWxlY3RvcihcIiNkaWFsb2dQcm9qZWN0XCIpO1xuY29uc3QgZGlhbG9nVGFzayA9IG1haW5fRE9NLnF1ZXJ5U2VsZWN0b3IoXCIjZGlhbG9nVGFza1wiKTtcbmNvbnN0IHByb2plY3ROYW1lID0gbWFpbl9ET00ucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0TmFtZVwiKTtcblxuZXhwb3J0IHtcbiAgcHJvamVjdF9jb250ZW50LFxuICB0YXNrX2NvbnRlbnQsXG4gIGJ0blByb2plY3REaWFsb2csXG4gIGJ0blRhc2tEaWFsb2csXG4gIGJ0blByb2plY3RDb25maXJtLFxuICBidG5Qcm9qZWN0Q2FuY2VsLFxuICBidG5UYXNrQ29uZmlybSxcbiAgYnRuVGFza0NhbmNlbCxcbiAgZGlhbG9nUHJvamVjdCxcbiAgZGlhbG9nVGFzayxcbiAgcHJvamVjdE5hbWUsXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLnRhc2tMaXN0ID0gW107XG4gICAgfVxuXG4gICAgZ2V0VGl0bGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICAgIH1cblxuICAgIGdldFRhc2tMaXN0KCl7XG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tMaXN0O1xuICAgIH1cblxuICAgIGFkZFRhc2sodGFzaykge1xuICAgICAgICB0aGlzLnRhc2tMaXN0LnB1c2godGFzayk7XG4gICAgfVxufSIsImltcG9ydCAqIGFzIGRvbSBmcm9tIFwiLi9nZXRET01cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3RUb0RPTShwcm9qZWN0KSB7XG4gIGNvbnNvbGUubG9nKHByb2plY3QpO1xuICBjb25zdCBwcm9qZWN0RE9NID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBidG5FZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgYnRuRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0VGl0bGUoKTtcblxuICBidG5FZGl0LnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG4gIGJ0bkRlbGV0ZS50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XG5cbiAgYnRuRWRpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge30pO1xuICBidG5EZWxldGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBkb20ucHJvamVjdF9jb250ZW50LnJlbW92ZUNoaWxkKHByb2plY3RET00pO1xuICB9KTtcblxuICBwcm9qZWN0RE9NLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcbiAgcHJvamVjdERPTS5hcHBlbmRDaGlsZChidG5FZGl0KTtcbiAgcHJvamVjdERPTS5hcHBlbmRDaGlsZChidG5EZWxldGUpO1xuICBkb20ucHJvamVjdF9jb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RET00pO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi4vcHJvamVjdFwiO1xuLy8gaW1wb3J0IFRhc2sgZnJvbSBcIi4uL21vZHVsZXMvdGFza1wiO1xuaW1wb3J0IHsgc2V0dXBFdmVudExpc3RlbmVycyB9IGZyb20gXCIuLi9tb2R1bGVzL2FkZExpc3RlbmVyc1wiO1xuXG5zZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG5cbi8vIGNvbnN0IGRlZlByb2plY3QgPSBuZXcgUHJvamVjdChcIlByb2plY3QgMVwiKTtcblxuLy8gZnVuY3Rpb24gY3JlYXRlQU5ld1Rhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSkge1xuLy8gICBjb25zdCBmaXJzdFRvRG8gPSBuZXcgVG9Ebyh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5KTtcbi8vICAgZGVmUHJvamVjdC5hZGRUYXNrKGZpcnN0VG9Ebyk7XG4vLyB9XG5cbi8vIGNyZWF0ZUFOZXdUYXNrKFwiRmlyc3RcIiwgXCJEbyBzbXRoIHBsZWFzZVwiLCBcIkxvd1wiKTtcbi8vIGNyZWF0ZUFOZXdUYXNrKFwiU2VjZW9uZFwiLCBcIkRvIHNtdGggZWxzZVwiLCBcIkhpZ2hcIik7XG4vLyBjcmVhdGVBTmV3VGFzayhcIlRoaXJkXCIsIFwiLi4gLi4uIC4gLi4uIFwiLCBcIm5vbmVcIik7XG5cbi8vIGNvbnNvbGUubG9nKGRlZlByb2plY3QuZ2V0VGFza0xpc3QoKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=