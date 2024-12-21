import "./styles.css";
import "./styles/create_style.css";
import { NewElement, Separator, colors } from "./utilities.js";

document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector("#item-title");
  const description = document.querySelector("#item-description");
  const date = document.querySelector("#item-dueDate");
  const priority = document.querySelector("#task--item-priority");
  const submission = document.querySelector(".item-post");
  const taskCard = document.querySelector(".tasks-doing");
  const taskCompleted = document.querySelector(".tasks-completed");

  submission.addEventListener("click", (event) => {
    event.preventDefault();

    // --------------------------------------------------
    // Create
    // --------------------------------------------------

    const taskContainer = NewElement("div", "task-doing-child");
    taskContainer.style.display = "flex";
    taskContainer.style.alignItems = "start";
    taskContainer.style.flexDirection = "column";
    taskContainer.style.border = `1px solid ${colors.gray[400]}`;
    taskContainer.style.margin = "1rem 0 0 0";
    taskContainer.style.padding = "1rem 1.25rem";
    taskContainer.style.overflow = "hidden";
    taskContainer.style.borderRadius = "0.75rem";
    taskContainer.style.boxShadow = "0 1px 2px 0 rgb(0 0 0 / 0.05)";
    taskCard.appendChild(taskContainer);

    const taskTitle = NewElement("h3", "tdc-title");
    taskTitle.style.fontSize = "1.125rem";
    taskTitle.style.lineHeight = "1.75rem";
    taskTitle.style.fontWeight = "bold";
    taskTitle.style.margin = "0";
    taskTitle.style.padding = "0";
    taskTitle.textContent = title.value;
    taskContainer.appendChild(taskTitle);

    const taskDescription = NewElement("p", "tdc-description");
    taskDescription.style.fontSize = "0.75rem";
    taskDescription.style.lineHeight = "1.rem";
    taskDescription.style.margin = "0";
    taskDescription.style.padding = "0";
    taskDescription.textContent = description.value;
    taskContainer.appendChild(taskDescription);

    const taskNestedContainer = NewElement("div", "task-doing-nested");
    taskNestedContainer.style.display = "flex";
    taskNestedContainer.style.alignItems = "center";
    taskNestedContainer.style.gap = "0.75rem";
    taskNestedContainer.style.margin = "0.125rem 0 0 0";
    taskNestedContainer.style.padding = "0";
    taskNestedContainer.style.fontSize = "0.75rem";
    taskNestedContainer.style.lineHeight = "1.25rem";
    taskNestedContainer.style.color = colors.gray[500];
    taskContainer.appendChild(taskNestedContainer);

    const taskContainerDate = NewElement("p", "tdc-date");
    taskContainerDate.textContent = date.value.toString();
    taskNestedContainer.appendChild(taskContainerDate);

    // --------------------------------------------------
    // Update
    // --------------------------------------------------

    const divider = Separator();
    taskNestedContainer.appendChild(divider);

    const taskPriority = NewElement("p", "tdc-priority");
    taskPriority.textContent = priority.value.toString();
    taskNestedContainer.appendChild(taskPriority);

    // --------------------------------------------------
    // Update
    // --------------------------------------------------

    const divider2 = Separator();
    taskNestedContainer.appendChild(divider2);

    const taskUpdate = NewElement("button", "tdc-update");
    taskUpdate.textContent = "Update";
    taskUpdate.style.backgroundColor = "#1d4ed8";
    taskUpdate.style.color = colors.white;
    taskUpdate.style.fontWeight = "bold";
    taskUpdate.style.padding = "0.2rem 0.8rem";
    taskUpdate.style.border = "none";
    taskUpdate.style.boxShadow = "none";
    taskUpdate.style.boxRadius = "none";
    taskUpdate.style.fontSize = "0.75rem";
    taskUpdate.style.lineHeight = "1rem";
    taskNestedContainer.appendChild(taskUpdate);

    // --------------------------------------------------
    // Delete
    // --------------------------------------------------

    const divider3 = Separator();
    taskNestedContainer.appendChild(divider3);

    const taskDelete = NewElement("button", "tdc-delete");
    taskDelete.textContent = "Delete";
    taskDelete.style.backgroundColor = "hsl(0, 72%, 51%)";
    taskDelete.style.color = "white";
    taskDelete.style.fontWeight = "bold";
    taskDelete.style.padding = "0.2rem 0.8rem";
    taskDelete.style.border = "none";
    taskDelete.style.boxShadow = "none";
    taskDelete.style.boxRadius = "none";
    taskDelete.style.fontSize = "0.75rem";
    taskDelete.style.lineHeight = "1rem";
    taskNestedContainer.appendChild(taskDelete);

    let idCounter = 1;
    taskContainer.setAttribute("data-id", idCounter++);

    taskDelete.addEventListener("click", (event) => {
      event.preventDefault();
      const taskToDelete = taskDelete.closest(".task-doing-child");
      if (taskToDelete) {
        taskToDelete.remove();
      }
    });

    // --------------------------------------------------
    // Complete
    // --------------------------------------------------
    const divider4 = Separator();
    taskNestedContainer.appendChild(divider4);

    const taskComplete = NewElement("button", "tdc-complete");
    taskComplete.textContent = "Complete";
    /* Tailwind CSS - Green 700 */
    taskComplete.style.backgroundColor = "#047857";
    taskComplete.style.color = "white";
    taskComplete.style.fontWeight = "bold";
    taskComplete.style.padding = "0.2rem 0.8rem";
    taskComplete.style.border = "none";
    taskComplete.style.boxShadow = "none";
    taskComplete.style.boxRadius = "none";
    taskComplete.style.fontSize = "0.75rem";
    taskComplete.style.lineHeight = "1rem";
    taskNestedContainer.appendChild(taskComplete);
    taskComplete.addEventListener("click", () => {
      const taskToMove = taskComplete.closest(".task-doing-child");
      if (taskToMove) {
        // Remove from tasks-doing
        taskToMove.remove();
        // Add to tasks-completed
        taskCompleted.appendChild(taskToMove);
        // Optional: Change the styling or remove complete button
        taskToMove.classList.remove("task-doing-child");
        taskToMove.classList.add("task-completed-child");
        taskComplete.style.backgroundColor = colors.gray[400];
        taskUpdate.style.backgroundColor = colors.gray[400];
        taskDelete.style.backgroundColor = colors.gray[400];
        taskComplete.style.color = "white";
        taskComplete.style.fontWeight = "bold";
        taskComplete.style.padding = "0.2rem 0.8rem";
        taskComplete.style.border = "none";
        taskComplete.style.boxShadow = "none";
        taskComplete.style.boxRadius = "none";
        taskComplete.style.fontSize = "0.75rem";
        taskComplete.style.lineHeight = "1rem";
        let taskCompleteChild = document.querySelector(".task-completed-child");
        taskCompleteChild.style.border = `1px solid ${colors.gray[200]}`;
      }
    });
  });
});
