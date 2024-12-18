import "./styles.css";

const title = document.querySelector("#item-title");
const submission = document.querySelector(".item-post");

document.addEventListener("DOMContentLoaded", () => {
  submission.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(title.value);
  });
});
