let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30 * hh + mm / 2;
    let mRotation = 6 * mm;
    let sRotation = 6 * ss;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;

}

setInterval(displayTime, 1000);

let hours = document.getElementById(`d-hour`);
let minutes = document.getElementById(`d-min`);
let seconds = document.getElementById(`d-sec`);

function displayDtime() {
    setInterval(() => {
        let currentTime = new Date();
        let hours = currentTime.getHours();
        let minutes = currentTime.getMinutes();
        let seconds = currentTime.getSeconds();
        let dayNight = "AM";

        if (hours > 12) {
            dayNight = "PM";
            hours = hours - 12;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (hours < 10) {
            hours = "0" + hours;
        }

        let digitalClock = document.getElementById('digital-clock');
        digitalClock.textContent = hours + ":" + minutes + ":" + seconds + " " + dayNight;
    }, 1000);
}
displayDtime();
