export default class Project {
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