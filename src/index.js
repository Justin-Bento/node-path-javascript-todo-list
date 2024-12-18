import "./styles.css";

const title = document.querySelector("#item-title");
const submission = document.querySelector(".item-post");
const taskDoing = document.querySelector(".tasks-doing");

document.addEventListener("DOMContentLoaded", () => {
  submission.addEventListener("click", (event) => {
    event.preventDefault();

    const taskDoingRadio = document.createElement("input");
    taskDoingRadio.type = "radio";

    // Create a label for the radio input
    const label = document.createElement("label");
    label.textContent = title.value || "Untitled Task"; // Fallback for empty input
    label.appendChild(taskDoingRadio);

    taskDoing.appendChild(label);
  });
});
