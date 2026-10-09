let startbtn = document.getElementById("start");
let stopbtn = document.getElementById("stop");
let resetbtn = document.getElementById("reset");


let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");



let hourcount = 0;
let mincount = 0;
let seccount = 0;





let digitalclock = null;

startbtn.addEventListener("click", () => {

    digitalclock = setInterval(() => {

        if (seccount == 4) {
            seccount = 0;
            mincount++;
        }
        if (mincount == 2) {
            seccount = 0;
            mincount = 0;
            hourcount++;
        }

        seccount++

        second.innerHTML = seccount;
        minute.innerHTML = mincount;
        hour.innerHTML = hourcount;

    }, 1000)

});

stopbtn.addEventListener("click", () => {

    clearInterval(digitalclock);


});



resetbtn.addEventListener("click", () => {


    clearInterval(digitalclock)

    hourcount = 0;
    mincount = 0;
    seccount = 0;



    second.innerHTML = seccount;
    minute.innerHTML = mincount;
    hour.innerHTML = hourcount;






});