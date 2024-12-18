import "./styles.css";

const title = document.querySelector("#item-title");
const submission = document.querySelector(".item-post");
const taskDoing = document.querySelector(".tasks-doing");

document.addEventListener("DOMContentLoaded", () => {
  submission.addEventListener("click", (event) => {
    event.preventDefault();

    const taskDoingRadio = document.createElement("input");
    taskDoingRadio.type = "radio";

    taskDoing.appendChild(taskDoingRadio);
  });
});
