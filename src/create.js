import { NewElement } from "./utilities.js";

export const Create = () => {
  const title = document.querySelector("#item-title");
  const description = document.querySelector("#item-description");
  const date = document.querySelector("#item-dueDate");
  const priority = document.querySelector("#task--item-priority");
  const submission = document.querySelector(".item-post");
  const taskDoing = document.querySelector(".tasks-doing");

  submission.addEventListener("click", (event) => {
    // Prevent form submission
    event.preventDefault();

    const taskDoingChild = NewElement("div", "task-doing-child");
    taskDoing.appendChild(taskDoingChild);

    // Child Of Task Doing - Title
    const taskDoingChildTitle = NewElement("h3", "tdc-title");
    taskDoingChildTitle.textContent = title.value;
    taskDoingChild.appendChild(taskDoingChildTitle);

    // Child Of Task Doing - Description
    const taskDoingChildDescription = NewElement("p", "tdc-description");
    taskDoingChildDescription.textContent = description.value;
    taskDoingChild.appendChild(taskDoingChildDescription);

    // Child Of Task Doing - Date
    const taskDoingChildDate = NewElement("p", "tdc-date");
    taskDoingChildDate.textContent = date.value.toString();
    taskDoingChild.appendChild(taskDoingChildDate);

    // Child Of Task Doing - Priority
    const taskDoingChildPriority = NewElement("p", "tdc-priority");
    taskDoingChildPriority.textContent = priority.value.toString();
    taskDoingChild.appendChild(taskDoingChildPriority);
  });
};
