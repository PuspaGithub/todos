import { create } from "./create.js";
import { renderTodos } from "./renderTodos.js";

const projectList = document.getElementById("project-list");

export function renderProjects(projects){
   
   projectList.textContent = "";

   if(projects.length){
      for(let i = 0; i< projects.length; i++){
         let noOfTodos = (projects[i]["todos"].length) ? projects[i]["todos"].length : "0";
         const li = create("li");

         const button = create("button", "project-btn");
         button.dataset.projectId = projects[i].id;
         if(i === 0){
            button.classList.add("active");
         }

         const span1 = create("span", "project-name", "", projects[i]["name"]);
         const span2 = create("span", "count", "", noOfTodos);

         button.append(span1, span2);
         li.append(button);

         projectList.append(li);
      }
   }
   return projectList;

};

export function renderActive(e, projects){
   const button = e.target.closest(".project-btn");
   if(!button) return;

   const id = button.dataset.projectId;
   const project = projects.find((p) => p.id === id);

   document.querySelectorAll(".project-btn").forEach((b) => b.classList.remove("active"));
   button.classList.add("active");

   renderTodos(project);
}