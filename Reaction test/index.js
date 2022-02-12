const button = document.querySelector("button");
const backGround = document.querySelector(".reaction");
const h1 = document.querySelector("h1");
const p = document.querySelector("p");

let X;
let second = 0;
let miliSecond = 0;
let second2 = 0;
let miliSecond2 = 0;

const times = [2000,3000,4000,5000,6000,7000];
const randomTime = Math.round(Math.random(times)* times.length);
const timesRandomTime = times[randomTime]

function timer(){
    miliSecond++;
    if(miliSecond === 100){
        second++;
        miliSecond = 0;
    }
};
  
button.addEventListener("click" , () => {
    timer();
    backGround.style.background = "blue";
    h1.style.display = "none";
    p.style.display = "none";
    button.style.display = "none";  
    setTimeout(() => {
        backGround.style.background = "green";
        X = true;

        function timer2(){
            miliSecond2++;
            if(miliSecond2 === 100){
                second2++;
                miliSecond2 = 0;
            }
        }

        if(X === true){
            let v = setInterval(timer2, 10);
            backGround.addEventListener("click", () => {
                const result = document.createElement("p");
                const h1 = document.createElement("h1");
                h1.classList.add("title");
                h1.style.fontSize = "4rem";
                h1.textContent = "your reaction"
                backGround.appendChild(h1);
                result.classList.add("result-reaction");
                result.style.fontSize = "7rem";
                result.textContent = `${second2}   :   ${miliSecond2}`;
                backGround.appendChild(result);
                clearInterval(v);
        }
    },timesRandomTime);
    setInterval(timer, 10);
});