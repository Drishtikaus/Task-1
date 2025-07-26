let gameseq=[];
let userseq=[];

let btns =["btn-pink", "btn-lavender","btn-skyblue","btn-seagreen"];

let start= false;
let level =0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(start==false){
        console.log("game is started");
        start = true;

        levelup();
    }
});

function flashbtn(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
},250);
}

function userflash(btn){
btn.classList.add("userflash");
setTimeout(function(){
    btn.classList.remove("userflash");
},250);
}


function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;

let randomidx = Math.floor(Math.random()*4);
let randomcolor = btns[randomidx];
let randombtn = document.querySelector(`.${randomcolor}`);

gameseq.push(randomcolor);
console.log(gameseq);

    flashbtn(randombtn);
}





function checkans(idx){

// let idx = level-1;

if(userseq[idx]===gameseq[idx]){
    // console.log("same seq");
    if(userseq.length==gameseq.length){
        setTimeout(levelup,1000)
        
    }
}
else{
    
    h2.innerText=`OOPS! Game is over. Your score if ${level}.Press any key to reset. `;
document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },75)
    reset();
}

}


function btnpress(){
    let btn = this;
    console.log(this);
    userflash(btn);

    let usercolor = btn.classList[0]
    // usercolor=btn.getAttribute("class");
 userseq.push(usercolor);

    checkans(userseq.length-1);
}

let Allbtns = document.querySelectorAll(".btn" );
for(btn of Allbtns){
    btn.addEventListener("click", btnpress);
}

function reset(){
    start = false;
    let gameseq=[];
let userseq=[];
level=0;
}