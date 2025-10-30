console.log("Script started");

function addTask() {
    // Get user input from textbox
    let textbox = document.getElementById("task-input");
    let task = textbox.value;
    
    // Create a list item
    // Get todo-list container div
    let todoList = document.getElementById("todo-list")
    
    // Create list-item div
    let listDiv = document.createElement("div");
    listDiv.id = "task" + todoList.childElementCount; 
    listDiv.classList.add("list-item");
    
    // Create checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "checkbox" + todoList.childElementCount;

    // Create label
    let label = document.createElement("label");
    label.id = "label" + todoList.childElementCount;
    label.innerText = task;

    // Append checkbox to list-item div
    listDiv.appendChild(checkbox);

    // Append label to div
    listDiv.appendChild(label);

 
    // Append list-item div to the list
    todoList.appendChild(listDiv);
}