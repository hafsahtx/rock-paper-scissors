function getComputerChoice(){
    let compChoice = Math.floor(Math.random()*3)+1;
    compChoice == 1 ? compChoice = "rock" : compChoice==2 ? compChoice = "paper" : compChoice = 'scissors';
    return compChoice;

}
function getHumanChoice(){
    let humanChoice = prompt("Input your choice: rock, paper or scissors");
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice=='rock'||humanChoice=="paper"||humanChoice=='scissors'){
        return humanChoice;
    }else{
        console.log("please input either rock, paper or scissors");
        return getHumanChoice();
    }
}
function playGame(){
    let humanScore = 0, computerScore = 0;
    function playRound(humanChoice, computerChoice){
        if (humanChoice==computerChoice){
            console.log("It's a draw!")
        }else if((humanChoice=='rock' && computerChoice=='paper')||
                 (humanChoice=='paper' && computerChoice=='scissors')||
                 (humanChoice=='scissors' && computerChoice=='rock')){
                    computerScore+=1;
                    console.log(`You lose this round! ${computerChoice} beats ${humanChoice}.`);
                 }
        else{
            humanScore+=1;
            console.log(`You win this round! ${humanChoice} beats ${computerChoice}.`);
        }
    }
    let numRounds = 5;
    while(numRounds>0){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        numRounds--;
    }
    if(humanScore>computerScore){
        console.log(`You won the game! You: ${humanScore} Computer: ${computerScore}`);
    }else{
        console.log(`You lost the game! You: ${humanScore} Computer: ${computerScore}`);
    }
    
}
playGame();

