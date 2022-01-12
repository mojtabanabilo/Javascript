const timerZone = document.querySelector(".timer");
const startButton = document.querySelector(".btn-1");
const stopButton = document.querySelector(".btn-2");
const resetButton = document.querySelector(".btn-3");

let second = 0;
let miliSecond = 0;
let interval;

startButton.addEventListener("click", () => {
    clearInterval(interval);
    interval = setInterval(timer, 10);
});

stopButton.addEventListener("click", () => {
    clearInterval(interval);
});

resetButton.addEventListener("click", () => {
    clearInterval(interval);
    timerZone.innerText = "00:00";
    second = 0;
    miliSecond = 0;
})

function timer(){
    miliSecond++;
    if(miliSecond > 9){
        timerZone.innerText = `${miliSecond}`;
    }
    if(miliSecond < 9){
        timerZone.innerText = `0${miliSecond}`;
    }
    if(miliSecond == 99){
        miliSecond = 0;
        second++;
        timerZone.innerText = `0${second}:${miliSecond}`;
    }
    if(second <= 9){
        timerZone.innerText = `0${second}:${miliSecond}`;
    }
    if(second > 9){
        timerZone.innerText = `${second}:${miliSecond}`;
    }
    clearInterval(interval)
    const interval = setInterval(timerFunction, 10);
};