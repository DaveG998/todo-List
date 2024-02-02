import Project from "./project";
import ToDo from "./toDo";



const defProject = new Project("Project 1");

function createANewTask(title, description, priority) {
    const firstToDo = new ToDo(title, description, priority);
    defProject.addTask(firstToDo);
}

createANewTask("First", "Do smth please", "Low");
createANewTask("Seceond", "Do smth else", "High");
createANewTask("Third", ".. ... . ... ", "none");

console.log(defProject.getTaskList());

