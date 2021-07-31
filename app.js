// DOM
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

// Static date for countdown...
const newYears = '31 December 2021'

// Maths
function countdown() {
    const newYearDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    // UI data adding...
    daysEl.innerHTML = days
    hoursEl.innerHTML = formateTime(hours)
    minsEl.innerHTML = formateTime(minutes)
    secondsEl.innerHTML = formateTime(seconds)
}
// Condition for making "0" to "00" formate..
function formateTime(time) {
    return time < 10 ? (`0${time}`) : time
}
countdown()
// Calling time...
setInterval(countdown, 1000);