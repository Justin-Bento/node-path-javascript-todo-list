import "./styles.css";
import "./styles/create_style.css";
import { NewElement, Separator } from "./utilities.js";

document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector("#item-title");
  const description = document.querySelector("#item-description");
  const date = document.querySelector("#item-dueDate");
  const priority = document.querySelector("#task--item-priority");
  const submission = document.querySelector(".item-post");
  const taskContainer = document.querySelector(".tasks-doing");

  submission.addEventListener("click", (event) => {
    event.preventDefault();

    // --------------------------------------------------
    // Create
    // --------------------------------------------------

    const taskContainerChild = NewElement("div", "task-doing-child");
    taskContainer.appendChild(taskContainerChild);

    const taskContainerChildTitle = NewElement("h3", "tdc-title");
    taskContainerChildTitle.textContent = title.value;
    taskContainerChild.appendChild(taskContainerChildTitle);

    const taskContainerChildDescription = NewElement("p", "tdc-description");
    taskContainerChildDescription.textContent = description.value;
    taskContainerChild.appendChild(taskContainerChildDescription);

    const taskContainerChild2nd = NewElement("div", "task-doing-child2nd");
    taskContainerChild.appendChild(taskContainerChild2nd);

    const taskContainerChildDate = NewElement("p", "tdc-date");
    taskContainerChildDate.textContent = date.value.toString();
    taskContainerChild2nd.appendChild(taskContainerChildDate);

    // --------------------------------------------------
    // Update
    // --------------------------------------------------

    const divider = Separator();
    taskContainerChild2nd.appendChild(divider);

    const taskContainerChildPriority = NewElement("p", "tdc-priority");
    taskContainerChildPriority.textContent = priority.value.toString();
    taskContainerChild2nd.appendChild(taskContainerChildPriority);

    // --------------------------------------------------
    // Update
    // --------------------------------------------------

    const divider2 = Separator();
    taskContainerChild2nd.appendChild(divider2);

    const taskContainerChildUpdate = NewElement("button", "tdc-update");
    taskContainerChildUpdate.textContent = "update";
    taskContainerChild2nd.appendChild(taskContainerChildUpdate);

    // --------------------------------------------------
    // Delete
    // --------------------------------------------------

    const divider3 = Separator();
    taskContainerChild2nd.appendChild(divider3);

    const taskContainerChildAction = NewElement("button", "tdc-delete");
    taskContainerChildAction.textContent = "Delete";
    taskContainerChild2nd.appendChild(taskContainerChildAction);

    let idCounter = 1;
    taskContainerChild.setAttribute("data-id", idCounter++);

    taskContainerChildAction.addEventListener("click", (event) => {
      event.preventDefault();
      const taskToDelete =
        taskContainerChildAction.closest(".task-doing-child");
      if (taskToDelete) {
        taskToDelete.remove();
      }
    });

    // --------------------------------------------------
    // Complete
    // --------------------------------------------------
    const divider4 = Separator();
    taskContainerChild2nd.appendChild(divider4);

    const taskContainerChildComplete = NewElement("button", "tdc-complete");
    taskContainerChildComplete.textContent = "Complete";
    taskContainerChild2nd.appendChild(taskContainerChildComplete);
    function moveToComplete() {
      console.log("Move to complete");
    }
    taskContainerChildComplete.addEventListener("click", moveToComplete);
  });
});
