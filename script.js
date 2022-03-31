//moves clock hands
const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

//create a function that runs every second, minute and hour
function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + 90;
  hourHand.style.transform = `rotate(${minsDegrees}deg)`;
  console.log(mins);
}

//function that allows soemething to run every second
setInterval(setDate, 1000);
