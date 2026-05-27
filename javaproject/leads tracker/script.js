let myLeads = [];
let oldLeads = [];
const inputEl = document.getElementById("inputLeads");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const tabBtn = document.getElementById("tab-btn");
const deleteBtn = document.getElementById("del-btn");

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}
let tabs = [];
tabBtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads)
    })
})

deleteBtn.addEventListener("click", function () {
    localStorage.clear();
    myLeads = [];
    render(myLeads)
})

inputBtn.addEventListener("click", function () {
    if (inputEl.value.trim() === "") return;

    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
});

inputEl.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        if (inputEl.value.trim() === "") return;

        myLeads.push(inputEl.value);
        inputEl.value = "";
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);

    }
})

function render(leads) {
    let listItems = "";

    for (let i = 0; i < leads.length; i++) {
        listItems += `
                <li>
                   <div class="list-cont">
                     <a target="_blank" href="${leads[i]}">
                        ${leads[i]}
                     </a>
                     <button class="delete-Btn" data-index="$">
                       <i class="fa-solid fa-trash"></i>
                     </button>
                   </div>
               </li>
       `;
    }
    ulEl.innerHTML = listItems;

}
