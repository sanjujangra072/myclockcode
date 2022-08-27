const hourE1 = document.getElementById("hours");
const minutsE2 = document.getElementById("minuts");
const secondsE3 = document.getElementById("seconds");
const ampmE4 = document.getElementById("ampm");

function updateclock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if(h>12){
        h=h-12;
        ampm = "PM";
    }
    hourE1.innerText = h;
    minutsE2.innerText = m;
    secondsE3.innerText = s;
    ampmE4.innerText = ampm;

    setTimeout(() => {
        updateclock();
    }, 1000);
}
updateclock();