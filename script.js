let playerScore = 0;
let computerScore = 0;
const Rounds = 5;

function playGame(playerChoice) //We create a function//
{

    const userChoice = ['Rock', 'Paper', 'Scissors']; // We create user choice//
    const computerChoice = userChoice[Math.floor(Math.random() * userChoice.length)];
    //We get the random choice from computer //
    let result;


    if (playerChoice === computerChoice) {

        result = 'match is draw';
    } else
    if ((playerChoice === 'Rock' && computerChoice == 'Scissors') || //Rock > scissor = Rock winner(Rock brake the scissors)//

        (playerChoice === 'Scissors' && computerChoice == 'Paper') || //scissors > Paper = scissors winner(scissors cut the paper)//

        (playerChoice === 'Paper' && computerChoice == 'Rock')) //paper > rock = paper winner(paper complete roll the rock)//
    {

        result = `You Win! ${playerChoice} beats ${computerChoice}`; // if player win the match//
        playerScore++;
    } else {

        result = `You Lose! ${computerChoice} beats ${playerChoice}`; // if player lose the match//
        computerScore++;
    }
    document.getElementById("result").innerText = result;
}