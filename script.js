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

function butFlash(btn){
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250);
}

function levelUp (){
    level++;
    h2.innerText = `Level ${level}`;

    let randomIndex = Math.floor(Math.random()*4)
    let randomColor = btns[randomIndex];
    let randomBut = document.querySelector(`.${randomColor}`);
    
    butFlash(randomBut);
}