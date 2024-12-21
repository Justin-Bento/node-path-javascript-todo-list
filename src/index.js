import "./styles.css";
import "./styles/create_style.css";
import { NewElement, Separator } from "./utilities.js";

document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector("#item-title");
  const description = document.querySelector("#item-description");
  const date = document.querySelector("#item-dueDate");
  const priority = document.querySelector("#task--item-priority");
  const submission = document.querySelector(".item-post");
  const taskDoing = document.querySelector(".tasks-doing");

  submission.addEventListener("click", (event) => {
    event.preventDefault();

    // --------------------------------------------------
    // Create
    // --------------------------------------------------

    const taskDoingChild = NewElement("div", "task-doing-child");
    taskDoing.appendChild(taskDoingChild);

    const taskDoingChildTitle = NewElement("h3", "tdc-title");
    taskDoingChildTitle.textContent = title.value;
    taskDoingChild.appendChild(taskDoingChildTitle);

    const taskDoingChildDescription = NewElement("p", "tdc-description");
    taskDoingChildDescription.textContent = description.value;
    taskDoingChild.appendChild(taskDoingChildDescription);

    const taskDoingChild2nd = NewElement("div", "task-doing-child2nd");
    taskDoingChild.appendChild(taskDoingChild2nd);

    const taskDoingChildDate = NewElement("p", "tdc-date");
    taskDoingChildDate.textContent = date.value.toString();
    taskDoingChild2nd.appendChild(taskDoingChildDate);

    // --------------------------------------------------
    // Update
    // --------------------------------------------------

    const divider = Separator();
    taskDoingChild2nd.appendChild(divider);

    const taskDoingChildPriority = NewElement("p", "tdc-priority");
    taskDoingChildPriority.textContent = priority.value.toString();
    taskDoingChild2nd.appendChild(taskDoingChildPriority);

    // --------------------------------------------------
    // Update
    // --------------------------------------------------

    const divider2 = Separator();
    taskDoingChild2nd.appendChild(divider2);

    const taskDoingChildUpdate = NewElement("button", "tdc-update");
    taskDoingChildUpdate.textContent = "update";
    taskDoingChild2nd.appendChild(taskDoingChildUpdate);

    // --------------------------------------------------
    // Delete
    // --------------------------------------------------

    const divider3 = Separator();
    taskDoingChild2nd.appendChild(divider3);

    const taskDoingChildAction = NewElement("button", "tdc-delete");
    taskDoingChildAction.textContent = "Delete";
    taskDoingChild2nd.appendChild(taskDoingChildAction);

    let idCounter = 1;
    taskDoingChild.setAttribute("data-id", idCounter++);

    taskDoingChildAction.addEventListener("click", (event) => {
      event.preventDefault();
      const taskToDelete = taskDoingChildAction.closest(".task-doing-child");
      if (taskToDelete) {
        taskToDelete.remove();
      }
    });

    // --------------------------------------------------
    // Complete
    // --------------------------------------------------
    const divider4 = Separator();
    taskDoingChild2nd.appendChild(divider4);

    const taskDoingChildComplete = NewElement("button", "tdc-complete");
    taskDoingChildComplete.textContent = "Complete";
    taskDoingChild2nd.appendChild(taskDoingChildComplete);
    function moveToComplete() {
      console.log("Move to complete");
    }
    taskDoingChildComplete.addEventListener("click", moveToComplete);
  });
});
