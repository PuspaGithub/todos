import { renderProjects, renderActive } from "./renderProjects.js";
import {showModal, closeModal, addProject} from "./projectAddDialog.js";
import {handleTodoForm, showTodoModal, cancelTodoModal} from "./handleTodoForm.js"

const projects = [];

// Getting Elements for the projects ADD, Cancel and show dialog's function
const newProjectBtn = document.getElementById("new-project-btn");
const cancelProject = document.getElementById("cancel-project");
const projectForm = document.getElementById("project-form");

export function loadHome() {
   renderProjects(localStorage); // renders porjects
   //renderTodos(projects[0]); // runs or shows the todos of 1st project on the list when DOM loads

   // Adds active class to the pressed project on the sidebar
   const projectList = document.getElementById("project-list");
   projectList.addEventListener("click", (e) => {renderActive(e, localStorage)})

   // This is for the adding Project's form
   newProjectBtn.addEventListener("click", () => {showModal()});
   cancelProject.addEventListener("click", () => {closeModal()})
   projectForm.addEventListener("submit", () => {addProject(projects)});
   

   // Gets whatever is inside the main tag and we are using it to add event listner in add todo button since the button does not have any id to select so we are using even deligation
   const main = document.getElementById("main");
   main.addEventListener("click", (e) => {showTodoModal(e, projects)});

   // Close the todo dialog when cancel is pressed.
   const cancelTodo = document.getElementById("cancel-todo");
   cancelTodo.addEventListener("click", () => {cancelTodoModal()})
   
   // handels the Todo form not project form and store the data and renders the todos
   const form = document.getElementById("todo-form");
   form.addEventListener("submit", () => { handleTodoForm(projects, form)})

}