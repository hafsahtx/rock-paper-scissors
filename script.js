let humanScore = 0, computerScore = 0;
function getComputerChoice(){
    let compChoice = Math.floor(Math.random()*3)+1;
    compChoice == 1 ? compChoice = "rock" : compChoice==2 ? compChoice = "paper" : compChoice = 'scissors';
    return compChoice;

}
console.log(`Computers choice is ${getComputerChoice()}`);
function getHumanChoice(){
    let humanChoice = prompt("Input your choice: rock, paper or scissors");
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice=='rock'||humanChoice=="paper"||humanChoice=='scissors'){
        return humanChoice;
    }else{
        console.log("please input either rock, paper or scissors");
        getHumanChoice();
    }
    
}
console.log(`Humans choice is ${getHumanChoice()}`);
