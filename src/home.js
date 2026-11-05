import { createProjects } from "./createProjects.js";
import { renderTodos } from "./renderProjects.js";

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
   createProjects(projects);
   renderTodos(projects[0]);

   const projectList = document.getElementById("project-list");
   projectList.addEventListener("click", (e) => {
      const button = e.target.closest(".project-btn");
      if(!button) return;

      const id = button.dataset.projectId;
      const project = projects.find((p) => p.id === id);

      document.querySelectorAll(".project-btn").forEach((b) => b.classList.remove("active"));
      button.classList.add("active");

      renderTodos(project)
   })
   
}