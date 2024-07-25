let userScore=0;
let computerScore=0;

let choicess=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let userScorePara=document.querySelector("#user-score")
let compScorePara=document.querySelector("#computer-score")

for(let choice of choicess){
    // console.log(choice); 
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
    //    console.log("Choice is clicked ",userChoice);
       playGame(userChoice);
    })
}

const playGame=(userChoice)=>{
    console.log("user Choice =" ,userChoice);
const compChoice=genCompChoice();
console.log("Computer Choice =",compChoice);

if(userChoice===compChoice){
    gameDraw();

}
else{
    let userWin=true;
    if(userChoice==="rock"){
          userWin=compChoice==="paper"?false:true;
    }
    else if(userChoice==="paper"){
        userWin= compChoice==="scissors"?false:true;
    }
    else{ // automatically userChoice is scissores
        userWin=compChoice==="rock"?false:true;
    }
    showUserWin(userWin,userChoice,compChoice);
        
    
}
}

const genCompChoice=()=>{
    let options=["rock","paper","scissors"];
 const randomIndex=Math.floor(Math.random()*3);
 return options[randomIndex];
};

const gameDraw=()=>{
    console.log(" the game is a draw");
    msg.innerText="Game was Draw.Play Again."
    msg.style.backgroundColor="#081b31";
}

const showUserWin=(userWin,userChoice,compChoice)=>{
if(userWin){
    userScore++;
    userScorePara.innerHTML=userScore;
    console.log("you win!");
    msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="Green";
}
else{
  computerScore++;
  compScorePara.innerHTML=computerScore;
        console.log("you lost");
        msg.innerText=`You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}





