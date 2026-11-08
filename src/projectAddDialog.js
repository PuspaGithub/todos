import { renderProjects} from "./renderProjects.js";


const newProjectBtn = document.getElementById("new-project-btn");
const projectDialog = document.getElementById("project-dialog");
const cancelProject = document.getElementById("cancel-project");
const projectForm = document.getElementById("project-form");
const projectInput = document.getElementById("project-input");

export function showModal() {
   projectDialog.showModal();
}

export function closeModal(){
   projectDialog.close();
   projectForm.reset();
}

export function addProject(projects){
   projects.push(
      {
         id: crypto.randomUUID(),
         name: projectInput.value.trim(),
         todos: []
      } 
   )
   renderProjects(projects);
   projectForm.reset();
}