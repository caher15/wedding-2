let days = document.getElementById('days'),
    hours = document.getElementById('hours'),
    min = document.getElementById('min'),
    seg = document.getElementById('seg');

const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;


let date = "Nov 2, 2025 00:00:00",
    countDown = new Date(date).getTime(),
    x = setInterval(function() {    

    let now = new Date().getTime(),
    distance = countDown - now;

    hours.innerText = Math.floor((distance % (day)) / (hour)),
    min.innerText = Math.floor((distance % (hour)) / (minute)),
    seg.innerText = Math.floor((distance % (minute)) / second);
    days.innerText = Math.floor(distance / (day));
}, 0)