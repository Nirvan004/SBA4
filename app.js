let tasks = [];

const taskNameInput = document.getElementById("taskName")
const taskCategoryInput = document.getElementById("taskCategory")
const taskDeadlineInput = document.getElementById('taskDeadline');
const taskStatusInput = document.getElementById('taskStatus');
const addTaskBtn = document.getElementById('addTask');

const filterStatus = document.getElementById("filterStatus");
const filterCategory = document.getElementById("filterCategory");

filterStatus.addEventListener("change", displayTasks);
filterCategory.addEventListener("input", displayTasks);

addTaskBtn.addEventListener('click', function() {
    const taskName = taskNameInput.value.trim();
    const taskCategory = taskCategoryInput.value.trim();
    const taskDeadline = taskDeadlineInput.value;
    const taskStatus = taskStatusInput.value;

    if (!taskName || !taskCategory || !taskDeadline) {
        alert("Please fill in all the fields!");
        return;
    }

    if (filterStatus.value !== "All" && task.status !== filterStatus.value) {
        return; // skip this task
    }
    if (filterCategory.value && !task.category.toLowerCase().includes(filterCategory.value.toLowerCase())) {
        return; // skip if category doesn't match
    }

    const newTask = {
        name: taskName,
        category: taskCategory,
        deadline: taskDeadline,
        status: taskStatus
    };
    tasks.push(newTask);
    displayTasks();
    taskNameInput.value = "";
    taskCategoryInput.value = "";
    taskDeadlineInput.value = "";
    taskStatusInput.value = "In Progress";

});

function displayTasks() {
    const taskListUl = document.getElementById("taskList");

    taskListUl.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        const today = new Date().toISOString().split("T")[0];
        if (task.status !== "Completed" && task.deadline < today) {
            task.status = "Overdue";
        }

        li.innerHTML = `
            <strong>${task.name}</strong> | 
            Category: ${task.category} | 
            Deadline: ${task.deadline} | 
            Status: 
            <select id="status-${index}">
                <option value="In Progress" ${task.status === "In Progress" ? "selected" : ""}>In Progress</option>
                <option value="Completed" ${task.status === "Completed" ? "selected" : ""}>Completed</option>
                <option value="Overdue" ${task.status === "Overdue" ? "selected" : ""}>Overdue</option>
            </select>
        `;

        taskListUl.appendChild(li);

        const statusSelect = document.getElementById(`status-${index}`);
        statusSelect.addEventListener("change", function () {
            task.status = this.value;
            displayTasks();
        });
    });
}