const userData = document.getElementById("type-place");
const Sentence = document.querySelector(".Sentence");
const timer = document.querySelector(".timer");
const button = document.querySelector(".btn")

const randomSentence = ["hello im here please open the door","The best companions of my life are my parents","You have to practice to learn Persian","A rider has to fall off a horse if she wants to become a professional","Congratulations on your success","nice too meet you my friend","can you play football","It takes perseverance to start any job","Without suffering treasure is not possible"];
const randomItem = randomSentence[Math.floor(Math.random(randomSentence) * randomSentence.length)];
Sentence.innerText = randomItem;

let milisecond = 0;
let minute = 0;
let y;

const xxx = function timerZone(){
    milisecond++;
    if(milisecond == 100){
        milisecond = 0;
        minute++;
    }
    timer.innerText = `0${minute}:0${milisecond}`;
    if(milisecond > 9){
        timer.innerText = `0${minute}:${milisecond}`;
    }
    if(minute > 9){
        timer.innerText = `${minute}:${milisecond}`;
    }
};

function result(event){
    const eventChar = event.target.value;
    clearInterval(y);
    y = setInterval(xxx, 10);
    if(eventChar === randomItem){
        clearInterval(y);
        button.style.background = "black";
        button.style.color = "white";
        button.style.border = "2px solid #ffffff";
        button.style.transition = "ease .2s";
    }
};

userData.addEventListener("keyup", result);

button.addEventListener("click", () => {
    location.reload();
})
