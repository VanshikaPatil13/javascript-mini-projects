let taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("task-list");

let task = "";

let isEditing = false;
if (!isEditing) {
    isEditing = true;
    addBtn.value = "ADD";
};

const addTask = () => {
     task = taskInput.value.trim();
    if (!task) {
        alert("Add task first");
        return;
    }
    const li = document.createElement("li");
    li.innerHTML = `
    <input type="checkbox" class="checkbox">
    <span>
    ${task}
    </span>
    <div class="task-button">
    <button  class="edit-btn"><i class="fa-solid fa-pen"></i></button>
    <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
    </div>
    `
    ;
    
    //checkboc complete toggel
    const checkbox = li.querySelector(".checkbox");
    checkbox.addEventListener("change", () => {
        li.classList.toggle("completed");
    });

    const span = li.querySelector("span");
    const editBtn = li.querySelector(".edit-btn");
    editBtn.addEventListener("click", () => {
        taskInput.value = span.textContent;
        addBtn.value = "UPDATE";
        isEditing = false;
        li.remove();
        taskInput.focus();
    });

    const deleteBtn = li.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    taskList.appendChild(li);

    taskInput.value = "";
    isEditing = true;
    addBtn.value = "ADD";
}

addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask(e);
    };
})
