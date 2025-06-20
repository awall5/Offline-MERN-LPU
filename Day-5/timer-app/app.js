const timer = document.getElementById("timer-text");
let timeInSec = 0;
// let timeInMin = 0;

const timerfunc = () => {
  timeInSec++;

  console.log(timeInSec);
  const sec = timeInSec % 60;
  let min = Math.floor(timeInSec / 60);
  min = min % 60;
  const hrs = Math.floor(timeInSec / 3600);
  timer.innerHTML = `
        ${hrs.toString().padStart(2, "0")}:${min
    .toString()
    .padStart(2, "0")}:${sec.toString().padStart(2, "0")}
    `;
};

let InterID = setInterval(timerfunc, 1000);

const Resetit = () => {
  timeInSec = 0;
};

const pause = () => {
  clearInterval(InterID);
};

const Resume = () => {
  InterID = setInterval(timerfunc, 1000);
};

const Lap = () => {
  const para = document.createElement("p");
  para.innerText = timer.innerText;
  document.getElementById("root").appendChild(para);
};
