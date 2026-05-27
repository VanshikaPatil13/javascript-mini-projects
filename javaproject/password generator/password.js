const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyIconEl = document.querySelector(".fa-copy");
const alertContainerEl = document.querySelector(".alert-container");


btnEl.addEventListener("click", ()=>{
    createPassword();
});

copyIconEl.addEventListener("click", () => {
    copyPassword();
    //using alert here to show message only when clicked on copy//
   //using if here so if we click on copy then only it will show  alert message otherwise no.// 
    if (inputEl.value){  
     alertContainerEl.classList.remove("active");//active is a class here of alert container//
    setTimeout(() => {
         alertContainerEl.classList.add("active");
    }, 2000);
}
});

// syntax for create password.

function createPassword (){
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@$%^&*()_+:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 14;
    let password = "";
    for(let index = 0; index < passwordLength; index++){
        const randomNum = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNum, randomNum + 1); 
    }     //substring(start, end) {end is excluded} to add value of characters and random number generates index value of characters after multiplying by chars length
    inputEl.value = password;
        alertContainerEl.innerText = password  + " copied!";

} 

//syntax for copy password.

function copyPassword(){
    inputEl.select();// to select input field
    inputEl.setSelectionRange(0,9999); //supports copying in mobile devices, where range is text range//
    navigator.clipboard.writeText(inputEl.value); 
    // to copy to clipboard then writeText to paste 
}