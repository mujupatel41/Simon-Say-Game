let gameSeq = [];
let userSeq = [];

let btns = ["gray", "pink", "orange", "blue"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");


document.addEventListener("keypress", () =>{
    if(started == false){
        console.log("game was started");
        started = true;

        levelUp();
    }

    
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(() => {
        btn.classList.remove("userflash");
    }, 200);
}

function levelUp (){
    level++;
    h2.innerText = `Level ${level}`;

    let randomIndex = Math.floor(Math.random()*4)
    let randomColor = btns[randomIndex];
    let randomBut = document.querySelector(`.${randomColor}`);
    
    gameFlash(randomBut);
}

function btnPress(){
    let btn = this;
    userFlash(btn);
}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click", btnPress)
}