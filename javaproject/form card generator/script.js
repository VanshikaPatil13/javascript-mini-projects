const form = document.getElementById("form");
const inputEl = document.querySelectorAll(".input");
const cardContainer = document.querySelector(".card-container");
const submit = document.querySelector(".submit");
const inputurl = document.querySelector("span");
const uploadBtn = document.querySelector(".upload");
const fileInput = document.getElementById("file");

//Store image
let imageSrc = "";

// Adding submit function
form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    generateCard();
});

// Adds enter key to submit
form.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        generateCard();
    }
});

//Handle file upload
fileInput.addEventListener("change", (dets) => {
    const file = dets.target.files[0];
  
    if (file) {
        inputurl.innerText = file.name;
         imageSrc = URL.createObjectURL(file);
    }
});

// Generating cards for individual enteries
function generateCard() {

    const name = inputEl[0].value.trim();
    const dob = inputEl[1].value.trim();
    const email = inputEl[2].value.trim();
    const role = inputEl[3].value.trim();

    // check empty fields
   if (!name && ! dob && !email && !role){
    alert("Please fill all fields and upload an image");
    return;
   }

    // create card wrapper
    let div = document.createElement("div");
    div.classList.add("main"); // add styling class

    div.innerHTML = `
                <div class="profile-cont">
                    <img class="profile-photo"
                    src=
                     "${imageSrc || 'https://via.placeholder.com/150'}"
                    alt="Profile Picture">
                </div>
                <div class="about">
                    <h4> 
                         ${name}
                    </h4>
                    <P>DOB:
                         ${dob}
                     </P>
                    <P>EMAIL: 
                         ${email}
                    </P>
                    <P class="occupation">JOB PROFILE :
                        <span class="para">
                          ${role}
                        </span>
                    </P>
                </div>
    `;

    //Append the card to the container
    cardContainer.appendChild(div);

    // Clear inputs
    inputEl.forEach((input) => {
            input.value = "";
    });

     inputurl.innerText="No file chosen ";
     imageSrc = "";
}

//Upload button click
uploadBtn.addEventListener("click", function () {
    fileInput.click();
});
