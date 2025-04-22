document.addEventListener("DOMContentLoaded", () => {
  const todoForm = document.getElementById("create-task-form");
  const todoList = document.getElementById("tasks");
  
  todoForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const taskInput = document.getElementById("new-task-description");
    const newTaskText = taskInput.value;
    
    if (newTaskText.trim() !== "") {
      const newTask = document.createElement("li");
      newTask.textContent = newTaskText;
      
      todoList.appendChild(newTask);
      
      taskInput.value = "";
    }
  });
});