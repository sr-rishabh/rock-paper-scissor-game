let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice")//access all 3 choices
let msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");//acess user score number
const compScorePara=document.querySelector("#comp-score");//acess comp score number


const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    //random func to select randomly one arrray elementi.e. choice ... jitne se multiply kiy ausse ek kam tak wo number generate kar sakta hai(generates decimal values) ... here generate indexes i.e. 0,1,2 so used math .floor to remove the  decimal values
    let randIdx=Math.floor(Math.random()*3);
    return options[randIdx];///returns comp choice
};

//draw
const drawGame=()=>{
    msg.innerText="It Was a draw. Play Again!";
    msg.style.backgroundColor="#081b31";
};

//show winner
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin===true){
        userScore++;
        userScorePara.innerText=userScore;//update the user's score
        console.log("You won");
        msg.innerText=`You Won! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;//update the comp's score
        console.log("You Loose");
        msg.innerText=`OOPS! You Lost, ${userChoice} beats your ${compChoice}.Try Again`;
        msg.style.backgroundColor="red";
    }
};

const playGame=(userChoice)=>{
    //generate computer choice
    const compChoice=genCompChoice();
    //decision 
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;//to check is user is winning or not
        if(userChoice==="rock"){
            //comp choice=scissor or paper ... as rock will be handled by draw game
            userWin=(compChoice==="paper") ? false : true;//paper vs scissor- scissor wins means user lost
        }
        else if(userChoice==="paper"){
            //comp choice=scissor or rock ... as paper will be handled by draw game
            userWin=(compChoice==="scissors") ? false : true;
        }
        else{//userChoice=scissors
            //comp choice=rock or paper
            userWin=(compChoice==="rock") ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);//shows winner on basis of userWin
    }
};

//add event listner to each choice to see which choice is selected
choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice=choice.getAttribute("id");//we got user's choice by acessing its id
        playGame(userChoice);//passed it to  playgame func
    });
});