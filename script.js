function playGame(playerChoice) //We create a function//
{

    const userChoice = ['Rock', 'Paper', 'Scissors']; // We create user choice//
    const computerChoice = userChoice[Math.floor(Math.random() * 3)];
    //We get the random choice from computer //
    let result;


    if (playerChoice === computerChoice) {

        result = 'match is draw';

    } else
    if ((playerChoice === 'Rock' && computerChoice == 'scissors') || //Rock > scissor = Rock winner(Rock brake the scissors)//

        (playerChoice === 'scissors' && computerChoice == 'Paper') || //scissors > Paper = scissors winner(scissors cut the paper)//

        (playerChoice === 'Paper' && computerChoice == 'Rock')) //paper > rock = paper winner(paper complete roll the rock)//
    {

        result = `You Win! ${playerChoice} beats ${computerChoice}`; // if player win the match//

    } else {

        result = `You Lose! ${computerChoice} beats ${playerChoice};` // if player lose the match//
    }
    document.getElementById("result").innerText = result;
}