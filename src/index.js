import "./styles.css";

document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector("#item-title");
  const description = document.querySelector("#item-description");
  const submission = document.querySelector(".item-post");
  const taskDoing = document.querySelector(".tasks-doing");

  submission.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form submission

    const container = document.createElement("div");
    container.classList.add("container");
    taskDoing.appendChild(container);

    // Create a new radio input
    const radioInput = document.createElement("input");
    radioInput.type = "radio";
    radioInput.value = title.value; // Use title value as the radio button's value

    // Create a label for the radio input
    const label = document.createElement("label");
    label.appendChild(radioInput); // Append the radio button to the label
    label.appendChild(
      document.createTextNode(` ${title.value || "Untitled Task"}`)
    ); // Add text after the radio button

    const paragraph = document.createElement("p");
    paragraph.classList.add("overview");
    paragraph.textContent = description.value;

    // Append the labeled radio button to the tasks container
    container.appendChild(label);
    container.appendChild(paragraph);

    // console.log(title.value +  + description.value);
  });
});
