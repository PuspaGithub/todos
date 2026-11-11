import { create } from "./create.js";
import { renderProjects, renderActive } from "./renderProjects.js";
import { renderTodos } from "./renderTodos.js";
import { Todo } from "./todo.js";

const todoDialog = document.getElementById("todo-dialog");
const todoProjectSelect = document.getElementById("todo-project-select");

export function showTodoModal(e, projects) {
  if (e.target.closest("#new-todo-btn")) {
    todoDialog.showModal();
    for (let i = 0; i < projects.length; i++) {
      const options = create("option", "", "", projects[i]["name"]);
      //options.value(projects[i]["name"]);
      todoProjectSelect.append(options);
    }
  }
  // when the dialog box opens to add the todo, load the options for selecting Project
}

const form = document.getElementById("todo-form");
export function cancelTodoModal() {
  todoDialog.close();
  todoProjectSelect.textContent = "";
  form.reset();
}

export function handleTodoForm(projects, form) {
  const f = form.elements;
  const todo = new Todo(
    f.title.value.trim(),
    f.description.value.trim(),
    f.dueDate.value,
    f.priority.value,
    f.project.value,
  );
  for (let i = 0; i < projects.length; i++) {
    if (projects[i]["name"] === f.project.value) {
      projects[i]["todos"].push(todo);
      localStorage.setItem("projects", JSON.stringify(projects));
    }
  }
  form.reset();
  todoProjectSelect.textContent = "";

  renderTodos(projects[0]);
  renderProjects(projects);
}
