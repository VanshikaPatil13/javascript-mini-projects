const searchInput = document.querySelector('.search-inp');
const searchIcon = document.querySelector('.fa-magnifying-glass');
const cardContainer = document.querySelector('.card-container');

const users = [
    {
        name: "Captain America",
        bio: "Lorem magnam quae ratillat perferendis vero suscipit deleniti illo ad consectetur!",
        pic: "./image/image1.jpg",
    },
    {
        name: "Spider Man",
        pic: "./image/image2.jpg",
        bio: "Lorem magnam quae ratillat perferendis vero suscipit deleniti illo ad consectetur!",
    },
    {
        name: "Ant Man",
        pic: "./image/image3.jpg",
        bio: "Lorem magnam quae ratillat perferendis vero suscipit deleniti illo ad consectetur!",
    },
    {
        name: "Thor",
        pic: "./image/image4.jpg",
        bio: "Lorem magnam quae ratillat perferendis vero suscipit deleniti illo ad consectetur!",
    },
    {
        name: "Hulk",
        pic: "./image/image5.jpg",
        bio: "Lorem magnam quae ratillat perferendis vero suscipit deleniti illo ad consectetur!",
    },
    {
        name: "Bat Man",
        pic: "./image/image6.jpg",
        bio: "Lorem magnam quae ratillat perferendis vero suscipit deleniti illo ad consectetur!",
    },
    {
        name: "Wonder Woman",
        pic: "./image/image7.jpg",
        bio: "Lorem magnam quae ratillat perferendis vero suscipit deleniti illo ad consectetur!",
    },
    {
        name: "Black Woman",
        pic: "./image/image8.jpg",
        bio: "Lorem magnam quae ratillat perferendis vero suscipit deleniti illo ad consectetur!",
    },
    {
        name: "Black Witch",
        pic: "./image/image9.jpg",
        bio: "Lorem magnam quae ratillat perferendis vero suscipit deleniti illo ad consectetur!",
    },
    {
        name: "Scarlet Witch",
        pic: "./image/image10.jpg",
        bio: "Lorem magnam quae ratillat perferendis vero suscipit deleniti illo ad consectetur!",
    }
];
function showUsers(arr) {
    arr.forEach(function (user) {
        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = user.pic;

        const blur = document.createElement("div");
        blur.classList.add("blurred-layer");

        const content = document.createElement("div");
        content.classList.add("content");

        const title = document.createElement("h3");
        title.textContent = user.name;

        const bio = document.createElement("p");
        bio.textContent = user.bio;

        content.appendChild(title);
        content.appendChild(bio);

        card.appendChild(img);
        card.appendChild(blur);
        card.appendChild(content);

        cardContainer.appendChild(card);
    });
};

showUsers(users);

searchInput.addEventListener("input",function(){
let newUser = users.filter((user)=>{
return user.name.toLowerCase().includes(searchInput.value.toLowerCase());});
cardContainer.innerHTML = "";
showUsers(newUser);
});
searchIcon.addEventListener(("click"),()=>{
searchInput.focus();
});