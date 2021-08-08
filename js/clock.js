const clock = document.querySelector("#clock");
const day = document.querySelector("#day")

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    const pmHours = String(hours-12);
    if (hours <= 12) {
        clock.innerText = `${hours}:${minutes}:${seconds}`;
        day.innerText = "AM";
    } else {
        clock.innerText = `${pmHours.padStart(2,"0")}:${minutes}:${seconds}`;
        day.innerText = "PM";
    }
}

getClock();
setInterval(getClock, 1000);