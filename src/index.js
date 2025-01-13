import "./styles.css";
import "./styles/create_style.css";
import { NewElement, Separator, colors } from "./utilities.js";

document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector("#item-title");
  const description = document.querySelector("#item-description");
  const date = document.querySelector("#item-dueDate");
  const priority = document.querySelector("#task--item-priority");
  const submission = document.querySelector(".item-post");
  const taskCard = document.querySelector(".tasks-doing");
  const taskCompleted = document.querySelector(".tasks-completed");

  submission.addEventListener("click", (event) => {
    event.preventDefault();

    const todoList = {
      taskContainer: null, // Add property to store taskContainer
      taskNestedContainer: null, // Add property to store taskNestedContainer

      initialize: function () {
        this.taskContainer = this.createContainer(); // Create and store container
        this.createTask();
        this.updateTask();
        this.deleteTask();
        this.completeTask();
      },

      createContainer: function () {
        const container = NewElement("div", "task-doing-child");
        container.style.display = "flex";
        container.style.alignItems = "start";
        container.style.flexDirection = "column";
        container.style.border = `1px solid ${colors.gray[400]}`;
        container.style.margin = "1rem 0 0 0";
        container.style.padding = "1rem 1.25rem";
        container.style.overflow = "hidden";
        container.style.borderRadius = "0.75rem";
        container.style.boxShadow = "0 1px 2px 0 rgb(0 0 0 / 0.05)";
        return container;
      },

      createTask: function () {
        taskCard.appendChild(this.taskContainer);

        const taskTitle = NewElement("h3", "tdc-title");
        taskTitle.style.fontSize = "1.125rem";
        taskTitle.style.lineHeight = "1.75rem";
        taskTitle.style.fontWeight = "bold";
        taskTitle.style.margin = "0";
        taskTitle.style.padding = "0";
        taskTitle.textContent = title.value;
        this.taskContainer.appendChild(taskTitle);

        const taskDescription = NewElement("p", "tdc-description");
        taskDescription.style.fontSize = "0.75rem";
        taskDescription.style.lineHeight = "1rem"; // Fixed lineHeight value
        taskDescription.style.margin = "0";
        taskDescription.style.padding = "0";
        taskDescription.textContent = description.value;
        this.taskContainer.appendChild(taskDescription);

        this.taskNestedContainer = NewElement("div", "task-doing-nested");
        this.taskNestedContainer.style.display = "flex";
        this.taskNestedContainer.style.alignItems = "center";
        this.taskNestedContainer.style.gap = "0.75rem";
        this.taskNestedContainer.style.margin = "0.125rem 0 0 0";
        this.taskNestedContainer.style.padding = "0";
        this.taskNestedContainer.style.fontSize = "0.75rem";
        this.taskNestedContainer.style.lineHeight = "1.25rem";
        this.taskNestedContainer.style.color = colors.gray[500];
        this.taskContainer.appendChild(this.taskNestedContainer);

        const taskContainerDate = NewElement("p", "tdc-date");
        taskContainerDate.textContent = date.value.toString();
        this.taskNestedContainer.appendChild(taskContainerDate);
      },

      updateTask: function () {
        const divider2 = Separator();
        this.taskNestedContainer.appendChild(divider2);

        const taskUpdate = NewElement("button", "tdc-update");
        taskUpdate.textContent = "Update";
        taskUpdate.style.backgroundColor = "#1d4ed8";
        taskUpdate.style.color = colors.white;
        taskUpdate.style.fontWeight = "bold";
        taskUpdate.style.padding = "0.2rem 0.8rem";
        taskUpdate.style.border = "none";
        taskUpdate.style.borderRadius = "0.25rem"; // Fixed property name
        taskUpdate.style.fontSize = "0.75rem";
        taskUpdate.style.lineHeight = "1rem";
        this.taskNestedContainer.appendChild(taskUpdate);
      },

      deleteTask: function () {
        const divider3 = Separator();
        this.taskNestedContainer.appendChild(divider3);

        const taskDelete = NewElement("button", "tdc-delete");
        taskDelete.textContent = "Delete";
        taskDelete.style.backgroundColor = "hsl(0, 72%, 51%)";
        taskDelete.style.color = "white";
        taskDelete.style.fontWeight = "bold";
        taskDelete.style.padding = "0.2rem 0.8rem";
        taskDelete.style.border = "none";
        taskDelete.style.borderRadius = "0.25rem"; // Fixed property name
        taskDelete.style.fontSize = "0.75rem";
        taskDelete.style.lineHeight = "1rem";
        this.taskNestedContainer.appendChild(taskDelete);

        let idCounter = 1;
        this.taskContainer.setAttribute("data-id", idCounter++);

        taskDelete.addEventListener("click", (event) => {
          event.preventDefault();
          const taskToDelete = taskDelete.closest(".task-doing-child");
          if (taskToDelete) {
            taskToDelete.remove();
          }
        });
      },

      completeTask: function () {
        const divider4 = Separator();
        this.taskNestedContainer.appendChild(divider4);

        const taskComplete = NewElement("button", "tdc-complete");
        taskComplete.textContent = "Complete";
        taskComplete.style.backgroundColor = "#047857";
        taskComplete.style.color = "white";
        taskComplete.style.fontWeight = "bold";
        taskComplete.style.padding = "0.2rem 0.8rem";
        taskComplete.style.border = "none";
        taskComplete.style.borderRadius = "0.25rem"; // Fixed property name
        taskComplete.style.fontSize = "0.75rem";
        taskComplete.style.lineHeight = "1rem";
        this.taskNestedContainer.appendChild(taskComplete);

        taskComplete.addEventListener("click", () => {
          const taskToMove = taskComplete.closest(".task-doing-child");
          if (taskToMove) {
            taskToMove.remove();
            taskCompleted.appendChild(taskToMove);
            taskToMove.classList.remove("task-doing-child");
            taskToMove.classList.add("task-completed-child");

            // Store references to buttons
            const updateButton = taskToMove.querySelector(".tdc-update");
            const deleteButton = taskToMove.querySelector(".tdc-delete");

            // Update all buttons
            [taskComplete, updateButton, deleteButton].forEach((button) => {
              if (button) {
                button.style.backgroundColor = colors.gray[400];
                button.style.color = "white";
                button.style.fontWeight = "bold";
                button.style.padding = "0.2rem 0.8rem";
                button.style.border = "none";
                button.style.borderRadius = "0.25rem";
                button.style.fontSize = "0.75rem";
                button.style.lineHeight = "1rem";
              }
            });

            taskToMove.style.border = `1px solid ${colors.gray[200]}`;
          }
        });
      },
    };

    todoList.initialize();
  });
});
