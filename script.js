let humanScore = 0, computerScore = 0;
function getComputerChoice(){
    let compChoice = Math.floor(Math.random()*3)+1;
    compChoice == 1 ? compChoice = "rock" : compChoice==2 ? compChoice = "paper" : compChoice = 'scissors';
    return compChoice;

}
let computerChoice = getComputerChoice();
console.log(`Computers choice is ${computerChoice}`);
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
let humanChoice = getHumanChoice();
console.log(`Humans choice is ${humanChoice}`);
function playRound(humanChoice, computerChoice){
    if (humanChoice==computerChoice){
        console.log("It's a draw!")
    }else if((humanChoice=='rock' && computerChoice=='paper')||
             (humanChoice=='paper' && computerChoice=='scissors')||
             (humanChoice=='scissors' && computerChoice=='rock')){
                computerScore+=1;
                console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
             }
    else{
        humanScore+=1;
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    }
}
playRound(humanChoice, computerChoice);