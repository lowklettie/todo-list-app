console.log("Script started");

function addTask() {
    // Get user input from textbox
    let textbox = document.getElementById("task-input");
    let task = textbox.value;
    //clear textbox
    textbox.value = "";

    // check for empty task text
    if (task == "") {
        alert("Please enter a task");
        return;
    }
    let idNum = generateIdNum();
    
   createTaskDiv(task, idNum);
   
     // save task to local storage
    localStorage.setItem("task" + idNum, task);

    console.log(localStorage.length);
}

function generateIdNum(){
    //let todoList = document.getElementById("todo-list")
   // let idNum = todoList.childElementCount;
    //return idNum; 

    // iterate through local storage
    // check for first available id number
    let idNum = 0; 
    while (localStorage.getItem("task" + idNum) != null) {
        idNum++;
    }
    return idNum;
}

function createTaskDiv(task, idNum) {
     // Create a list item
    // Get todo-list container div
    let todoList = document.getElementById("todo-list")
    
    // Create list-item div
    let taskDiv = document.createElement("div");
    taskDiv.id = "task" + idNum;
    taskDiv.classList.add("list-item");
    
    // Create checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "checkbox" + idNum;
    checkbox.addEventListener("change", removeTask);

    // Create label
    let label = document.createElement("label");
    label.id = "label" + idNum;
    label.innerText = task;

    // Append checkbox to list-item div
    taskDiv.appendChild(checkbox);

    // Append label to div
    taskDiv.appendChild(label);

 
    // Append list-item div to the list
    todoList.appendChild(taskDiv);
}

function removeTask(event){
    //getting the id from the checkbox
    let checkboxId = event.target.id;// e.g. checkbox10
    
    //get id number from the checkbox id
    let idNum = checkboxId.substring(8)
    
    //get task div by id
    let taskDiv = document.getElementById("task" + idNum);

    // apply animation
    taskDiv.classList.add("remove-task");
    
    //remove the task div from layout
    setTimeout(function() {
        taskDiv.remove();
        localStorage.removeItem(taskDiv.id);
    }, 1000);
    
}

function loadTasks(){
    console.log("Loading tasks...")
    // get each task from localStorage
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let task = localStorage.getItem(key);
        console.log(task);
        // create task divs for each task
        createTaskDiv(task, key.substring(4));
    }
}

loadTasks();