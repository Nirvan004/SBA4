let tasks = [];

const taskNameInput = document.getElementById("taskName")
const taskCategoryInput = document.getElementById("taskCategory")
const taskDeadlineInput = document.getElementById('taskDeadline');
const taskStatusInput = document.getElementById('taskStatus');
const addTaskBtn = document.getElementById('addTask');

addTaskBtn.addEventListener('click', function() {
    const taskName = taskNameInput.value.trim();
    const taskCategory = taskCategoryInput.value.trim();
    const taskDeadline = taskDeadlineInput.value;
    const taskStatus = taskStatusInput.value;

    if (!taskName || !taskCategory || !taskDeadline) {
        alert("Please fill in all the fields!");
        return;
    }

    const newTask = {
        name: taskName,
        category: taskCategory,
        deadline: taskDeadline,
        status: taskStatus
    };
    tasks.push(newTask);
    
    taskNameInput.value = "";
    taskCategoryInput.value = "";
    taskDeadlineInput.value = "";
    taskStatusInput.value = "In Progress";

});