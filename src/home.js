import { renderProjects } from "./renderProjects.js";
import { renderTodos } from "./renderTodos.js";

const projects = [
   {
      id: "default",
      name: "Inbox",
      todos: [
         {
            id: "t1",
            title: "todo-1",
            description: "",
            dueDate: "2026-10-04",
            priority: "medium",
            done: false,
         },
         {
            id: "t1",
            title: "todo-1",
            description: "",
            dueDate: "2026-10-04",
            priority: "high",
            done: false,
         },
      ],
   },
   {
      id: "id-01",
      name: "University",
      todos: [
         {
            id: "t1",
            title: "todo-1",
            description: "",
            dueDate: "2026-10-04",
            priority: "high",
            done: false,
         },
      ],
   },
   {
      id: "id-02",
      name: "Grocery",
      todos: [
      ],
   },
];


export function loadHome() {
   renderProjects(projects); // renders porjects
   renderTodos(projects[0]); // runs or shows the todos of 1st project on the list when DOM loads

   const projectList = document.getElementById("project-list");
   projectList.addEventListener("click", (e) => {
      const button = e.target.closest(".project-btn");
      if(!button) return;

      const id = button.dataset.projectId;
      const project = projects.find((p) => p.id === id);

      document.querySelectorAll(".project-btn").forEach((b) => b.classList.remove("active"));
      button.classList.add("active");

      renderTodos(project);
   })
   
   const newProjectBtn = document.getElementById("new-project-btn");
   const projectDialog = document.getElementById("project-dialog");
   const cancelProject = document.getElementById("cancel-project");
   const projectForm = document.getElementById("project-form");
   const projectInput = document.getElementById("project-input");

   newProjectBtn.addEventListener("click", () => {
      projectDialog.showModal();
   });

   cancelProject.addEventListener("click", () => {
      projectDialog.close();
      projectForm.reset();
   })

   projectForm.addEventListener("submit", () => {
      projects.push(
         {
            id: crypto.randomUUID(),
            name: projectInput.value.trim(),
            todos: []
         } 
      )
      renderProjects(projects);
      projectForm.reset();
   });
   
   const newTodoBtn = document.getElementById("new-todo-btn");
   const todoDialog = document.getElementById("todo-dialog");

   newTodoBtn.addEventListener("click", () => {
      todoDialog.showModal();
   })
   

}