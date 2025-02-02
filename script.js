function getComputerChoice(){
    let compChoice = Math.floor(Math.random()*3)+1;
    compChoice == 1 ? compChoice = "rock" : compChoice==2 ? compChoice = "paper" : compChoice = 'scissors';
    return compChoice;

}


function playGame(){
    let result = document.createElement("div");
    let p = document.createElement("p");
    let score = document.createElement("p");
    let winner = document.createElement("p");
    function playRound(humanChoice, computerChoice){
        if (humanChoice==computerChoice){
            winner.textContent = "";
            p.textContent = "It's a draw!";
            result.appendChild(p);
            document.body.appendChild(result);
            score.textContent = `Current score: You:${humanScore} : Computer:${computerScore}`;
            document.body.appendChild(score);
            
        }else if((humanChoice=='rock' && computerChoice=='paper')||
                 (humanChoice=='paper' && computerChoice=='scissors')||
                 (humanChoice=='scissors' && computerChoice=='rock')){
                    computerScore+=1;
                    winner.textContent = "";
                    p.textContent = `You lose this round! ${computerChoice} beats ${humanChoice}.`;
                    result.appendChild(p);
                    document.body.appendChild(result);
                    score.textContent = `Current score: You:${humanScore} : Computer:${computerScore}`;
                    document.body.appendChild(score);
                 }
        else{
            humanScore+=1;
            winner.textContent = "";
            p.textContent = `You win this round! ${humanChoice} beats ${computerChoice}.`;
            result.appendChild(p);
            document.body.appendChild(result);
            score.textContent = `Current score: You:${humanScore} : Computer:${computerScore}`;
            document.body.appendChild(score);
        }
        if(humanScore==5){
            p.textContent = "";
            score.textContent = "";
            winner.textContent = `You have won the game! You:${humanScore} : Computer:${computerScore}`;
            document.body.appendChild(winner);
            rockbtn.disabled = true;
            paperbtn.disabled = true;
            scissorsbtn.disabled = true;
            resetGame();   
                
           
            
        }else if(computerScore==5){
            p.textContent = "";
            score.textContent = "";
            winner.textContent = `The computer has won the game! Computer:${computerScore} : You:${humanScore}`;
            document.body.appendChild(winner);
            rockbtn.disabled = true;
            paperbtn.disabled = true;
            scissorsbtn.disabled = true;
            resetGame();
            
         
        }
        function resetGame(){
            let resetBtn = document.createElement("button");
            resetBtn.textContent = "Reset Game";
            document.body.appendChild(resetBtn);
            resetBtn.addEventListener("click", function(){
                winner.textContent = "";
                humanScore = 0;
                computerScore = 0;
                rockbtn.disabled = false;
                paperbtn.disabled = false;
                scissorsbtn.disabled = false;
                resetBtn.remove();   
            })
           
        }
        
    }    
   
    let rockbtn = document.createElement("button");
    rockbtn.textContent = "Rock";
    document.body.appendChild(rockbtn);  
    rockbtn.addEventListener('click', function(){let computerChoice = getComputerChoice();playRound("rock", computerChoice);});
    let paperbtn = document.createElement("button");
    paperbtn.textContent = "Paper";
    paperbtn.style.margin = '8px';
    document.body.appendChild(paperbtn); 
    paperbtn.addEventListener('click', function(){let computerChoice = getComputerChoice();playRound("paper", computerChoice);});
    let scissorsbtn = document.createElement("button");
    scissorsbtn.textContent = "Scissors"
    document.body.appendChild(scissorsbtn);  
    scissorsbtn.addEventListener('click', function(){let computerChoice = getComputerChoice();playRound("paper", computerChoice);}); 
    
}

let humanScore = 0, computerScore = 0;
let gameOver = false;
playGame();

