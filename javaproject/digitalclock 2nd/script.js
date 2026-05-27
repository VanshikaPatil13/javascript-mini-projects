const hrs = document.querySelector(".hrs");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");
const ampmText = document.querySelector(".am-pm");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];


//function for update clock
function updateClock() {
  let now = new Date();

  let hours = now.getHours();
  let mins = now.getMinutes();
  let secs = now.getSeconds();

  let ampm;
  if (hours >= 12) {
    ampm = "PM";
  } else {
    ampm = "AM";
  }

  //Convert 24-hour to 12 hour
  hours = hours % 12;

  // fix 0 to 12
  if (hours === 0) {
    hours = 12;
  }

  // add 0 when single digit
  if (hours < 10) {
    hours = "0" + hours;
  }

  //add 0 for minutes
  if (mins < 10) {
    mins = "0" + mins;
  }

  //add 0 for sec
  if (secs < 10) {
    secs = "0" + secs;
  }

  //final date details

  hrs.textContent = hours;
  min.textContent = mins;
  sec.textContent = secs;
  ampmText.textContent = ampm;

  //date
  let dayName = days[now.getDay()];
  let month = now.getMonth();
  let date = now.getDate();
  let year = now.getFullYear();

  let monthName = months[month];

  //add 0 to date when not two digit
  if (date < 10) {
    date = "0" + date;
  }

  const dateCont = document.getElementById("date");
  const dateDetails = `${dayName}, ${monthName} ${date}, ${year}`;
  dateCont.textContent = dateDetails;
  tick.play();
}

updateClock(); //run immediatelys
setInterval(updateClock, 1000);
