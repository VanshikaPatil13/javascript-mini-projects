const cards = document.querySelectorAll('.card');
const images = document.querySelectorAll('.image');
const container = document.querySelector('.container');

let currentIndex = 0;
let overlay;

cards.forEach((card, index) => {
    card.addEventListener("click", () => {
        currentIndex = index;
        showOverlay(index);
    });
});

function showOverlay(index) {
    if(overlay)return;
    const imageSrc = cards[currentIndex].querySelector("img").src;

    overlay = document.createElement("div");
    overlay.classList.add("overlay");
    overlay.style.display = "flex";

    overlay.innerHTML = `
        <div class="img-Box">
          <span class="close">&times;</span>
          <button class="prev">&#10094;</button>
          <img class="overlay-img" src="${imageSrc}" alt="">
          <button class="next">&#10095;</button>
        </div>
    `;

    document.querySelector("body").appendChild(overlay);

   const nextBtn = overlay.querySelector(".next");
   const prevBtn =  overlay.querySelector(".prev");
    nextBtn.addEventListener("click", showNext);
    prevBtn.addEventListener("click", showPrev);

    overlay.querySelector(".close").addEventListener("click", () => {
        overlay.remove();
        overlay = null;
    });
};

function showNext() {
    currentIndex = (currentIndex + 1) % cards.length;
    overlay.querySelector(".overlay-img").src = cards[currentIndex].querySelector("img").src;
}
function showPrev() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length; 
    overlay.querySelector(".overlay-img").src = cards[currentIndex].querySelector("img").src;
}

//keyboard navigation
document.addEventListener("keydown", function keyHandler(e){
    if(e.key === "ArrowRight")showNext();
    if(e.key === "ArrowLeft") showPrev();
    if(e.key === "Escape") overlay.remove();
});