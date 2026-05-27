let heading = document.querySelector("h2");
let progressBar = document.querySelector(".progress-bar");
let progressText = document.getElementById("progress-text");
let downloadText = document.getElementById("download");
let downloadBtn= document.getElementById("download-btn");

let interval;
let seconds= 5;

downloadBtn.addEventListener("click",()=>{
    //stop previous interval if still running
    if(interval)clearInterval(interval);

   //Reset values for a new download 
    let count = 0;
    downloadText.textContent="Downloading...";
  
    //prevent double click
    downloadBtn.disabled = true;
  
     interval = setInterval(() => {
        if (count <= 99) {
            count++;
            progressBar.style.width = `${count}%`;
            progressText.textContent = `${count}%`;
        } else {
            downloadText.textContent="Downloaded.";
            clearInterval(interval);
            // re-enable button
            downloadBtn.disabled=false;
        }
    }, 
     (seconds*1000)/100
    );
});
