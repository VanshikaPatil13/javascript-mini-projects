// Load tasks
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Render tasks on page load
renderTasks();

// Add task
addBtn.addEventListener("click", () => addTask(taskInput.value));
taskInput.addEventListener("keypress", (e) => {
    if(e.key === "Enter") addTask(taskInput.value);
});

function addTask(taskText) {
    if(!taskText.trim()) return;
    tasks.push({ text: taskText, completed: false });
    taskInput.value = "";
    saveAndRender();
}

function saveAndRender() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}

function renderTasks() {
    let listItems = "";
    tasks.forEach((task, index) => {
        listItems += `
        <li>
            <input type="checkbox" ${task.completed ? "checked" : ""} data-index="${index}">
            <span class="${task.completed ? "completed" : ""}">${task.text}</span>
            <button class="delete-btn" data-index="${index}">
                <i class="fa-solid fa-trash"></i>
            </button>
        </li>`;
    });
    taskList.innerHTML = listItems;

    // Add event listeners after rendering
    taskList.querySelectorAll("input[type=checkbox]").forEach(checkbox => {
        checkbox.addEventListener("change", (e) => {
            const i = e.target.dataset.index;
            tasks[i].completed = e.target.checked;
            saveAndRender();
        });
    });

    taskList.querySelectorAll(".delete-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const i = e.target.closest("button").dataset.index;
            tasks.splice(i, 1);
            saveAndRender();
        });
    });
}