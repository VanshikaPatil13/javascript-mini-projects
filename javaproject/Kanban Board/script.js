const todo = document.getElementById("todo");
const progress = document.getElementById("progress");
const done = document.getElementById("done");
const task = document.querySelectorAll(".task");

const toggleBtn = document.getElementById("toggle-modal");
const modal = document.querySelector(".modal");
const modalBg = document.querySelector(".modal .bg");
const addTaskBtn = document.getElementById("add-new-task");

const inpTask = document.getElementById("task-desc-inp");
const taskTitleInp = document.getElementById("task-title-inp");

let dragElement = null;
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


function updateCounts() {
    const columns = [todo, progress, done];

    columns.forEach(col => {
        const tasks = col.querySelectorAll(".task");
        const count = col.querySelector(".right");
        count.innerText = tasks.length;
    });
}

task.forEach(task => {
    task.addEventListener("dragstart", (e) => {
        dragElement = task;
    });
});


function addDragEventsOnColumn(column) {

    column.addEventListener("dragenter", (e) => {
        e.preventDefault();
        column.classList.add("hover-over");
    });

    column.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    column.addEventListener("drop", (e) => {
        e.preventDefault();
        if (dragElement) {
            column.appendChild(dragElement);
           
            const id = dragElement.dataset.id;

            tasks = tasks.map(t=>{
                if(t.id==id){
                    return{...t, status: column.id};
                }
                return t;
            });

            saveTasks();
            dragElement=null;
            updateCounts();
        }
        column.classList.remove("hover-over");
    });

    column.addEventListener("dragleave", () => {
        column.classList.remove("hover-over");
    });
}

/* APPLY EVENTS */
addDragEventsOnColumn(todo);
addDragEventsOnColumn(progress);
addDragEventsOnColumn(done);

toggleBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

modalBg.addEventListener("click", () => {
    modal.style.display = "none";
});

addTaskBtn.addEventListener("click", () => {
    const title = taskTitleInp.value.trim();
    const taskDesc = inpTask.value.trim();

    if (!title || !taskDesc) return;

    const id=Date.now();

    const taskObj = {
        id,
        title,
        desc: taskDesc,
        status: "todo"
    };

    tasks.push(taskObj);
    saveTasks();

    const div = document.createElement("div");
    div.classList.add("task");
    div.setAttribute("draggable", "true");
    div.dataset.id = id;

    div.innerHTML = `
   <h2>${title}</h2>
   <p>${taskDesc}</p>
   <button>Delete</button>
   `;

    div.querySelector("button").addEventListener("click", () => {
        tasks=tasks.filter(t=>t.id!=id);
        saveTasks();
        div.remove();
        updateCounts();
    });

     // DRAG
    div.addEventListener("dragstart", (e) => {
        dragElement = div;
    });

    todo.appendChild(div);

    updateCounts();
    
    taskTitleInp.value = "";
    inpTask.value = "";
    modal.style.display = "none";

});

