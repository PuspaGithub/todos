export function create(tag, classes, id, text) {
   const item = document.createElement(tag);
   if(classes) item.classList.add(...classes.split(" "));
   if(text) item.textContent = text;
   if(id) item.id = id;
   return item;
}