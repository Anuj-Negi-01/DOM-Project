const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const totalTasks = document.getElementById('totalTasks')
let taskAdded = 0;
const completedTasks = document.getElementById('completedTasks')
let completedTasksCount = 0
const predefined = document.getElementById("predefined");

addButton.addEventListener("click", addToDo);

taskInput.addEventListener('keydown', function(e){
    if(e.key === 'Enter') addToDo()
})

function addToDo(){
    const taskInput = document.getElementById("taskInput");
    if(!taskInput.value) return
    predefined.style.display = "none";
    const taskItem = document.createElement("li");
    taskItem.classList.add('task-item')
    taskItem.innerHTML = `<input type="checkbox" name="isCompleted" id="isCompleted" class="complete-checkbox" onclick="markAsComplete(this)"> 
              <h4 class="task-text">${taskInput.value}</h4> 
              <button class="delete-button" onclick="removeTaks(this)">Delete</button>`;
    taskList.appendChild(taskItem)
    taskInput.value = ''
    taskAdded++;
    totalTasks.innerHTML = `Total tasks: ${taskAdded}`
}



function removeTaks(currentBtn){
    if(taskAdded === 1){
        taskAdded = 0;
        totalTasks.innerHTML = `Total tasks: ${taskAdded}`
        completedTasksCount = 0;
        completedTasks.innerHTML = `Completed: ${completedTasksCount}`
        predefined.style.display = "";
    }
    else{
        if(taskAdded > 1){
            taskAdded--;
            totalTasks.innerHTML = `Total tasks: ${taskAdded}`
        } 
        if(currentBtn.previousElementSibling.previousElementSibling.checked){
            completedTasksCount--;
            completedTasks.innerHTML = `Completed: ${completedTasksCount}`
        }
    }
    currentBtn.parentElement.remove()
}

function markAsComplete(currentInput){
    currentInput.nextElementSibling.classList.toggle('complete-task-text')
    if(currentInput.checked){
        completedTasksCount++;
        completedTasks.innerHTML = `Completed: ${completedTasksCount}`
    }
    else {
        completedTasksCount--;
        completedTasks.innerHTML = `Completed: ${completedTasksCount}`
    }
}




