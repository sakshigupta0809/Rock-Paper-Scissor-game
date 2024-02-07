let userScrore = 0;
let compScrore = 0;

const choices  = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScoreValue = document.querySelector("#user-score");
const compScoreValue = document.querySelector("#comp-score");

const genComChoice = () =>{
    let options = ["rock", "paper", "scissors"];
    let randIdx = Math.floor(Math.random()*3); 
    return options[randIdx];
}
const drawGame = (userChoice) =>{
    // console.log("game was draw.");
    msg.innerText = `Game was draw. Play again! your choice ${userChoice}`;
    msg.style.backgroundColor = "#081a31";
}
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        // console.log("you win");
        msg.innerText = `You Win! your ${userChoice} beats ${compChoice} `;
        msg.style.backgroundColor = "green";
        userScrore++;
        userScoreValue.innerText = userScrore;
    }
    else{
        // console.log("you lose");
        msg.innerText = `You Lose. ${compChoice} beats your ${userChoice}  `;
        msg.style.backgroundColor = "red";
        compScrore++;
        compScoreValue.innerText = compScrore;
    }
}

const playGame = (userChoice) =>{
    console.log("user choice =", userChoice);
    const compChoice = genComChoice();
    console.log("comp choice =", compChoice );

    if(userChoice === compChoice ){
        drawGame(userChoice);
    }
    else {
        let userWin = true;
        if(userChoice === "rock"){
            // paper , scissor
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            // rock , scissor
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            // rock , paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);

    }

}

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice  = choice.getAttribute("id");        
        playGame(userChoice);
    });
});