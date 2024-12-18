import "./styles.css";

const title = document.querySelector("#item-title");
const submission = document.querySelector(".item-post");
const taskDoing = document.querySelector(".tasks-doing");

document.addEventListener("DOMContentLoaded", () => {
  submission.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form submission

    // Create a new radio input
    const radioInput = document.createElement("input");
    radioInput.type = "radio";
    radioInput.value = title.value; // Use title value as the radio button's value

    // Create a label for the radio input
    const label = document.createElement("label");
    label.textContent = title.value || "Untitled Task"; // Fallback for empty input
    label.appendChild(radioInput);

    // Append the labeled radio button to the tasks container
    taskDoing.appendChild(label);
  });
});
