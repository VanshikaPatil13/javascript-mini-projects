const daysEl = document.getElementById("Days");
const minEl = document.getElementById("Minutes");
const hrsEl = document.getElementById("Hours");
const secEl = document.getElementById("Seconds");

//target date: jan1 , 2027
const newyear = new Date("Jan 1,2027 00:00:00").getTime();

function updateCountdown(){
   const now = new Date().getTime(); //getTime returns number of milliseconds since 1970 january 1
   const gap = newyear - now;

   if (gap <= 0) {
    document.querySelector(".wrapper").innerHTML = "<h1>🎉 Happy New Year 2027 🎉</h1>";
    return;
   }
   
   let days = Math.floor(gap / (1000 * 24 * 60 * 60));
   let hours = Math.floor((gap % (1000 * 60 * 60 * 24))  / (1000 * 60 * 60));
   let minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
   let seconds = Math.floor((gap % (1000 * 60)) / 1000 );

   function formatTime (time){
      return time < 10 ? "0" + time : time;
   }
   days= formatTime(days);
   hours = formatTime(hours);
   minutes = formatTime(minutes);
   seconds = formatTime(seconds);

   daysEl.innerText = days;
   hrsEl.innerText = hours;
   minEl.innerText = minutes;
   secEl.innerText = seconds;

}
   
setInterval(updateCountdown, 1000);
updateCountdown();