export default class Task{
    constructor(title, description, priority) {
        this.title = title;
        this.description = description;
        this.priority = priority;
    }

    getTitle() {
        return this.title;
    }

    getDescription() {
        return this.description;
    }
    
    getPrioity() {
        return this.priority;
    }
}