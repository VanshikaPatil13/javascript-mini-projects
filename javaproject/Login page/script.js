const form = document.getElementById("login-form");
const message = document.getElementById("para");
const passwordInput = document.getElementById("password");

message.style.display = "block";

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;
   
    //password empty check
    if(!password){
        message.style.display = "inherit";
        message.textContent = "*Password required";
        message.style.color= "red";
        return;
    }

    // Regex check
    const regexAns = passwordRegex.test(password);
    if (!regexAns) {
        message.style.display = "inherit";
        message.textContent = "Password must contain @#*,123! ";
        message.style.color = "red";
        return;
    }
    //success
    if (regexAns) {
        message.textContent = "Logged in successfully";
        message.style.color = "green";
    }
});

passwordInput.addEventListener("click",()=>{
    message.textContent = "";
    passwordInput.value ="";
});