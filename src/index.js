import "./styles.css";
import { NewElement } from "./utilities.js";

document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector("#item-title");
  const description = document.querySelector("#item-description");
  const submission = document.querySelector(".item-post");
  const taskDoing = document.querySelector(".tasks-doing");

  submission.addEventListener("click", (event) => {
    // Prevent form submission
    event.preventDefault();

    // Create the label for the task
    const taskLabel = NewElement("label", "current--task-doing");
    taskLabel.setAttribute("for", "current-task");

    // Create a div to hold the radio button and title
    const taskDiv = NewElement("div", "current--task-doing-child");

    // Create the radio button
    const taskRadioButton = NewElement("input", "current-task--completion");
    taskRadioButton.setAttribute("type", "radio");
    taskRadioButton.setAttribute("name", "current-task");
    taskRadioButton.setAttribute("id", "current-task");
    taskRadioButton.setAttribute("value", title.value || "Untitled Task");

    // Create the span for the task title
    const taskTitle = NewElement("span", "current--task-doing-title");
    taskTitle.textContent = title.value || "This is my first task.";

    // Append the radio button and title to the div
    taskDiv.appendChild(taskRadioButton);
    taskDiv.appendChild(taskTitle);

    // Create the paragraph for the task description
    const taskDescription = NewElement("p", "current--task-doing-description");
    taskDescription.textContent =
      description.value || "Which is a pretty big deal.";

    // Append the div and description to the label
    taskLabel.appendChild(taskDiv);
    taskLabel.appendChild(taskDescription);

    // Append the label to the tasks-doing section
    taskDoing.appendChild(taskLabel);
  });
});
