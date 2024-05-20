let gameSeq = [];
let userSeq = [];
let btns = ["gray", "pink", "orange", "blue"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");


document.addEventListener("keypress", () =>{
    if(started == false){
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
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randomIndex = Math.floor(Math.random()*4)
    let randomColor = btns[randomIndex];
    let randomBut = document.querySelector(`.${randomColor}`);
    
    gameSeq.push(randomColor);
    gameFlash(randomBut);
}

function checkSeq(idx){

    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000)

        }
    } else{
        h2.innerText = `Game Over! Press Any Key To Start`
        reset();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkSeq(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click", btnPress)
}

function reset(){
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
}