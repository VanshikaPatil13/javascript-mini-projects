const form = document.getElementById("bmiForm");
const result = document.getElementById("result");


form.addEventListener('submit', function(e){
    e.preventDefault();

    const weight = parseFloat(document.getElementById("weight").value); //parseFloat converts string to number.
    const height = parseFloat(document.getElementById("height").value)/100; //cm to meter

    if (weight > 0 && height > 0){
        const bmi = (weight/(height*height)).toFixed(2); //to get upto 2 decimal values
        let category = "";

        if(bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi < 24.9) {
            category = 'Normal weight';
        } else if (bmi < 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obese';
        }

        result.textContent = `Your BMI is ${bmi} (${category})`;
    }else {
        result.textContent = `please enter valid numbers`;
    }
    }
    
);
