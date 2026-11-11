import { renderProjects } from "./renderProjects.js";
import { renderTodos } from "./renderTodos.js";

export function deleteTodo(e, projects) {
  let projectIndex = 0;
  if (e.target.id === "deleteTodo") {
    const projectId = e.target.dataset.projectId;
    projectIndex = projects.findIndex(p.id === projectId);
    projects.forEach((project) => {
      project.todos = project.todos.filter(
        (todo) => todo.id !== e.target.dataset.id,
      );
    });
    localStorage.setItem("projects", JSON.stringify(projects));
  }
  if (e.target.id === "updateTodo") {
    const projectId = e.target.dataset.projectId;
    projectIndex = projects.findIndex((p) => p.id === projectId);
  }
  renderTodos(projects[projectIndex]);
  renderProjects(projects);
}
