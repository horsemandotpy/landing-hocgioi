//Video Player
const load = document.querySelectorAll('.video');

load.forEach(element => {
    element.addEventListener('click', () => {
        element.classList.add('player')
    })
});

//Count Down
const countDown = function () {
    var countDownDate = new Date("June 30, 2038 23:59:59").getTime();
    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        // document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;
        if (distance < 0) {
            clearInterval(x);
            // document.getElementById("days").innerHTML = "EXPIRED";
            document.getElementById("hours").innerHTML = "EXPIRED";
            document.getElementById("minutes").innerHTML = "EXPIRED";
            document.getElementById("seconds").innerHTML = "EXPIRED";
        }
    }, 1000);
};

window.addEventListener("DOMContentLoaded", countDown)
