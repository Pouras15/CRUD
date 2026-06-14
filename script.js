const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {

    const task = taskInput.value.trim();

    if (task === "") {
        alert("Please Enter a Task");
        return;
    }

    
    const li = document.createElement("li");

    
    const taskText = document.createElement("span");
    taskText.textContent = task;

   
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

   
    const updateBtn = document.createElement("button");
    updateBtn.textContent = "Update";

    updateBtn.addEventListener("click", function () {

        const newTask = prompt("Update Task", taskText.textContent);

        if (newTask !== null && newTask.trim() !== "") {
            taskText.textContent = newTask;
        }

    });

    
    li.appendChild(taskText);
    li.appendChild(updateBtn);
    li.appendChild(deleteBtn);

    
    taskList.appendChild(li);

    
    taskInput.value = "";
});