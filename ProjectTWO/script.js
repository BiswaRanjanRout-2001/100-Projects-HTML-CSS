console.log("Hello, World!");   

const days = document.getElementById("days-data");
const hours = document.getElementById("hours-data");
const minutes = document.getElementById("minutes-data");
const seconds = document.getElementById("seconds-data");
const headingElem = document.querySelector("#heading");
const arr = [days,hours,minutes,seconds];

(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 10);


    function updateCountdown() {
        const now = new Date();
        const timeDifference = targetDate - now;

        if (timeDifference <= 0) {
            countdown.innerHTML = "Countdown Complete!";
            clearInterval(interval);
            return;
        }

        const d = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const h = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
        const m = Math.floor((timeDifference / (1000 * 60)) % 60);
        const s = Math.floor((timeDifference / 1000) % 60);

        days.in

    //    arr.forEach((elem)=>elem.classList.add('detail-num'));
       days.innerText=d;
       hours.innerText = h;
       minutes.innerText = m;
       seconds.innerText=s;

     
       
    }

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Call immediately to avoid 1-second delay
})();
