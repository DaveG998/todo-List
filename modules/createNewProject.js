import { projectName } from "./getDOM";
import Project from "./project";

export function createProject() {
  const project = new Project(projectName.value);
  return project;
}
