
let dayItem =document.querySelector("#days");
let hrItem =document.querySelector("#hr");
let minItem =document.querySelector("#min");
let secItem =document.querySelector("#sec");

let countDown = ()=>
{
    let futureDate = new Date("31 dec 2021");
    let currDate = new Date();
    let myDate = futureDate - currDate;

    let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
    let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
    let mins = Math.floor(myDate / 1000 / 60 ) % 60;
    let secs = Math.floor(myDate / 1000 ) % 60;

    dayItem.innerHTML= days;
    hrItem.innerHTML= hours;
    minItem.innerHTML= mins;
    secItem.innerHTML= secs;

}

countDown()

setInterval(countDown,1000);