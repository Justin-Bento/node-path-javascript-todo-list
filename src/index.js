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

    const taskCardChild = NewElement("div", "task-doing-child");
    taskCard.appendChild(taskCardChild);

    const taskCardChildTitle = NewElement("h3", "tdc-title");
    taskCardChildTitle.textContent = title.value;
    taskCardChild.appendChild(taskCardChildTitle);

    const taskCardChildDescription = NewElement("p", "tdc-description");
    taskCardChildDescription.textContent = description.value;
    taskCardChild.appendChild(taskCardChildDescription);

    const taskCardChild2nd = NewElement("div", "task-doing-child2nd");
    taskCardChild.appendChild(taskCardChild2nd);

    const taskCardChildDate = NewElement("p", "tdc-date");
    taskCardChildDate.textContent = date.value.toString();
    taskCardChild2nd.appendChild(taskCardChildDate);

    // --------------------------------------------------
    // Update
    // --------------------------------------------------

    const divider = Separator();
    taskCardChild2nd.appendChild(divider);

    const taskCardChildPriority = NewElement("p", "tdc-priority");
    taskCardChildPriority.textContent = priority.value.toString();
    taskCardChild2nd.appendChild(taskCardChildPriority);

    // --------------------------------------------------
    // Update
    // --------------------------------------------------

    const divider2 = Separator();
    taskCardChild2nd.appendChild(divider2);

    const taskCardChildUpdate = NewElement("button", "tdc-update");
    taskCardChildUpdate.textContent = "update";
    taskCardChild2nd.appendChild(taskCardChildUpdate);

    // --------------------------------------------------
    // Delete
    // --------------------------------------------------

    const divider3 = Separator();
    taskCardChild2nd.appendChild(divider3);

    const taskCardChildAction = NewElement("button", "tdc-delete");
    taskCardChildAction.textContent = "Delete";
    taskCardChild2nd.appendChild(taskCardChildAction);

    let idCounter = 1;
    taskCardChild.setAttribute("data-id", idCounter++);

    taskCardChildAction.addEventListener("click", (event) => {
      event.preventDefault();
      const taskToDelete = taskCardChildAction.closest(".task-doing-child");
      if (taskToDelete) {
        taskToDelete.remove();
      }
    });

    // --------------------------------------------------
    // Complete
    // --------------------------------------------------
    const divider4 = Separator();
    taskCardChild2nd.appendChild(divider4);

    const taskCardChildComplete = NewElement("button", "tdc-complete");
    taskCardChildComplete.textContent = "Complete";
    taskCardChild2nd.appendChild(taskCardChildComplete);
    function moveToComplete() {
      console.log("Move to complete");
    }
    taskCardChildComplete.addEventListener("click", moveToComplete);
  });
});
