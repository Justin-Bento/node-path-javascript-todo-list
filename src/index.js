import "./styles.css";
import "./styles/create_style.css";
import { NewElement, Separator } from "./utilities.js";

document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector("#item-title");
  const description = document.querySelector("#item-description");
  const date = document.querySelector("#item-dueDate");
  const priority = document.querySelector("#task--item-priority");
  const submission = document.querySelector(".item-post");
  const taskCard = document.querySelector(".tasks-doing");

  submission.addEventListener("click", (event) => {
    event.preventDefault();

    // --------------------------------------------------
    // Create
    // --------------------------------------------------

    const taskContainer = NewElement("div", "task-doing-child");
    taskCard.appendChild(taskContainer);

    const taskTitle = NewElement("h3", "tdc-title");
    taskTitle.textContent = title.value;
    taskContainer.appendChild(taskTitle);

    const taskDescription = NewElement("p", "tdc-description");
    taskDescription.textContent = description.value;
    taskContainer.appendChild(taskDescription);

    const taskNestedContainer = NewElement("div", "task-doing-nested");
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
    taskUpdate.textContent = "update";
    taskNestedContainer.appendChild(taskUpdate);

    // --------------------------------------------------
    // Delete
    // --------------------------------------------------

    const divider3 = Separator();
    taskNestedContainer.appendChild(divider3);

    const taskDelete = NewElement("button", "tdc-delete");
    taskDelete.textContent = "Delete";
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
    taskNestedContainer.appendChild(taskComplete);
    function moveToComplete() {
      console.log("Move to complete");
    }
    taskComplete.addEventListener("click", moveToComplete);
  });
});
