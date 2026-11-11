import { create } from "./create.js";

export function renderTodos(project) {
  const main = document.getElementById("main");
  main.textContent = "";

  const header = create("header", "main-header");

  const h2 = create("h2", "", "project-title", project["name"]);

  const button = create(
    "button",
    "btn btn-primary",
    "new-todo-btn",
    "+ Add Todo",
  );

  header.append(h2, button);

  const ul = create("ul", "todo-list", "todo-list");
  const p = create(
    "p",
    "empty-state",
    "",
    "No todos yet. Add one to get started.",
  );

  if (project["todos"].length === 0) {
    main.append(header, p);
    return main;
  }

  for (let i = 0; i < project["todos"].length; i++) {
    const li = create("li", `todo priority-${project["todos"][i]["priority"]}`);

    const details = create("details");
    const summary = create("summary");
    const input = create("input", "todo-check");
    input.type = "checkbox";
    const span = create(
      "span",
      "todo-title",
      "",
      `${project["todos"][i]["title"]}`,
    );
    const time = create(
      "time",
      "todo-date",
      "",
      `${project["todos"][i]["dueDate"]}`,
    );
    const update = create("button", "update", "updateTodo", "Update");
    update.dataset.id = project["todos"][i]["id"];
    update.dataset.projectId = project["id"];
    const deletebtn = create("button", "delete", "deleteTodo", "Delete");
    deletebtn.dataset.id = project["todos"][i]["id"];
    deletebtn.dataset.projectId = project["id"];

    summary.append(input, span, update, deletebtn, time);
    details.append(summary);
    li.append(details);
    ul.append(li);
  }

  main.append(header, ul);

  return main;
}
