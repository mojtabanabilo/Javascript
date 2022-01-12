const paperButton = document.querySelector(".paper");
const scissorButton = document.querySelector(".scissor");
const rockButton = document.querySelector(".rock");
const gameTitle = document.querySelector(".game-title");
const resultGame = document.querySelector(".result");
const titleItems = document.querySelector(".title h2");
const YC = document.querySelector(".y-c");
const OC = document.querySelector(".o-c");
const W = document.querySelector(".w");
const l = document.querySelector(".l");

let x;

function showResult() {
    gameTitle.remove();
    resultGame.style.display = "block";
    YC.innerHTML = `your choice: ${x}`;
    OC.innerHTML = `opponent choice: ${randomItem}`;
}

const opponentItem = ["rock", "scissor", "paper"];
const randomItem = opponentItem[Math.floor(Math.random() * opponentItem.length)];

paperButton.addEventListener("click", (f) => {
    const paperId = f.target.id;
    if(randomItem === "rock"){
        W.innerHTML = `winner: you`
        l.innerHTML = `loser: opponent`
    } else {
        W.innerHTML = `winner: opponent`;
        l.innerHTML = `loser: you`;
    }
    if(randomItem === "scissor"){
        W.innerHTML = `winner: opponent`
        l.innerHTML = `loser: you`
    } else {
        W.innerHTML = `winner: you`;
        l.innerHTML = `loser: opponent`;
    }
    if(randomItem === "paper"){
        W.innerHTML = `winner: tie`;
        l.innerHTML = `loser: tie`;
    }
    x = paperId;
    showResult();
    titleItems.innerHTML = `<h2 style="color: red;">please refresh the browser</h2>`;
});

scissorButton.addEventListener("click", (f) => {
    const scissorId = f.target.id;
    if(randomItem === "rock"){
        W.innerHTML = `winner: opponent`;
        l.innerHTML = `loser: you`;
    } else {
        W.innerHTML = `winner: you`;
        l.innerHTML = `loser: opponent`;
    }
    if(randomItem === "paper"){
        W.innerHTML = `winner: you`;
        l.innerHTML = `loser: opponent`;
    } else {
        W.innerHTML = `winner: opponent`;
        l.innerHTML = `loser: you`;
    }
    if(randomItem === "scissor"){
        W.innerHTML = `winner: tie`;
        l.innerHTML = `loser: tie`;
    }
    x = scissorId;
    showResult();
    titleItems.innerHTML = `<h2 style="color: red;">please refresh the browser</h2>`;
});

rockButton.addEventListener("click", (f) => {
    const rockId = f.target.id;
    if(randomItem === "scissor"){
        W.innerHTML = `winner: you`;
        l.innerHTML = `loser: opponent`;
    } else {
        W.innerHTML = `winner: opponent`;
        l.innerHTML = `loser: you`;
    }
    if(randomItem === "paper"){
        W.innerHTML = `winner: opponent`;
        l.innerHTML = `loser: you`;
    } else {
        W.innerHTML = `winner: you`;
        l.innerHTML = `loser: opponent`;
    }
    if(randomItem === "rock"){
        W.innerHTML = `winner: tie`;
        l.innerHTML = `loser: tie`;
    }
    x = rockId;
    showResult();
    titleItems.innerHTML = `<h2 style="color: red;">please refresh the browser</h2>`;
})

