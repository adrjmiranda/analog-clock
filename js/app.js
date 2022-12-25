const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHando = document.querySelector('.second-hand');

const setStartPosition = 180;

let previousHour;
let previousMinute;
let previousSecond;

const clockStart = () => {
  const actualTime = new Date();

  previousHour = actualTime.getHours();
  previousMinute = actualTime.getMinutes();
  previousSecond = actualTime.getSeconds();

  changeHour(previousHour);
  changeMinute(previousMinute);
  changeSecond(previousSecond);
};

const changeHour = (hour) => {
  hourHand.style.transform = `translate(-15px, -10px) rotate(${
    setStartPosition + 30 * hour
  }deg)`;
};

const changeMinute = (minute) => {
  minuteHand.style.transform = `translate(-20px, -9px) rotate(${
    setStartPosition + 6 * minute
  }deg)`;
};

const changeSecond = (second) => {
  secondHando.style.transform = `translate(-30px, -24px) rotate(${
    setStartPosition + 6 * second
  }deg)`;
};

clockStart();

setInterval(() => {
  let time = new Date();

  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();

  if (second !== previousSecond) {
    changeSecond(second);
    previousSecond = second;
  }

  if (minute !== previousMinute) {
    changeMinute(minute);
    previousMinute = minute;
  }

  if (hour !== previousHour) {
    previousHour = hour;
    changeHour(hour);
  }
}, 0);
