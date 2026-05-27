const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";

// Loop through all buttons
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.innerText;

        // If Clear button
        if (value === "C") {
            currentInput = "";
            display.value = "";
        }

        // If Equal button
        else if (value === "=") {
            try {
                currentInput = eval(currentInput); // calculate
                display.value = currentInput;
            } catch {
                display.value = "Error";
                currentInput = "";
            }
        }

        // Normal buttons (numbers + operators)
        else {
            currentInput += value;
            display.value = currentInput;
        }
    });
});