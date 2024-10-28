function playGame(playerChoice) {
    const userChoice = ['Rock', 'Paper', 'Scissors'];
    const computerChoice = userChoice[Math.floor(Math.random() * 3)];
    let result;

    if (playerChoice === computerChoice) {

        result = 'match is draw';

    } else if ((playerChoice === 'Rock' && computerChoice == 'scissors') ||

        (playerChoice === 'scissors' && computerChoice == 'Paper') ||

        (playerChoice === 'Paper' && computerChoice == 'Rock')) {

        result = `You Win! ${playerChoice} beats ${computerChoice}`;

    } else {
        result = `You Lose! ${computerChoice} beats ${playerChoice};`
    }
    document.getElementById("result").innerText = result

}