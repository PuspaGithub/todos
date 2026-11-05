import { createProjects } from "./createProjects.js";

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
            priority: "high",
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

// const renderProject = renderProjects(projects)

export function loadHome() {
   createProjects(projects);
}