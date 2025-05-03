// Function that returns a random choice from CHOICES
function getComputerChoice() {
  // Create a string variable called computerChoice
  let computerChoice;

  // Create an array variable called CHOICES including Rock, Paper, Scissors
  let CHOICES = ['rock', 'paper', 'scissors'];

  // Choose a random option from the CHOICES array and set it to computerChoice
  computerChoice = CHOICES[parseInt(Math.random() * 2)];

  // Return computerChoice
  return computerChoice;
};


// Function that returns the user's choice
function getHumanChoice(test) {
  // Create a variable called humanChoice
  let humanChoice = test;
  
  // Ask usr for a choice of rock paper or scissors and store it in humanChoice  
  // Return humanChoice
  return humanChoice.toLowerCase();
};

let humanScore = 0;
let computerScore = 0;

// Function that plays a single round that takes in computerChoice and humanChoice
function playRound(computerChoice, humanChoice) {
  // If computerChoice loses to humanChoice then print 'You win!' and adds 1 to humanScore
  if (
    humanChoice === 'rock' && computerChoice === 'scissors' || 
    humanChoice === 'scissors' && computerChoice === 'paper' ||
    humanChoice === 'paper' && computerChoice === 'rock') {

    humanScore += 1;
    roundResults.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
    
  // If computerChoice equals humanChoice then print 'It's a draw!'
  } else if (humanChoice === computerChoice) {
    roundResults.textContent = `The game is a draw!`;
  
  // If computerChoice beats humanChoice then print 'You lose!' and adds 1 to computer score
  } else {
    computerScore += 1;
    roundResults.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
  };

  if (humanScore === 5) {
    finalScore.textContent = `You won ${humanScore} to ${computerScore}!`;
    results.removeChild(gameResults);
    disableButtons();  
  } else if (computerScore === 5) {
    finalScore.textContent = `You lost ${computerScore} to ${humanScore}!`;
    results.removeChild(gameResults);
    disableButtons();  
  } else {
    gameResults.textContent = `Player Score: ${humanScore} | Computer Score: ${computerScore}`;
  }
};

function disableButtons() {
  buttons.forEach((button) => {
    button.setAttribute('disabled', 'disabled');
  });

  const resetBtn = document.createElement('button');
  resetBtn.textContent = 'Reset';
  results.appendChild(resetBtn);

  resetBtn.addEventListener('click', () => {
    location.reload();
  })
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const buttons = document.querySelectorAll('button');

let results = document.querySelector('.results');
const roundResults = document.createElement('p');
const gameResults = document.createElement('p');
const finalScore = document.createElement('p');

rock.addEventListener('click', () => {
  const computerChoice = getComputerChoice();
  playRound(computerChoice, 'rock');
});

paper.addEventListener('click', () => {
  const computerChoice = getComputerChoice();
  playRound(computerChoice, 'paper');
});

scissors.addEventListener('click', () => {
  const computerChoice = getComputerChoice();
  playRound(computerChoice, 'scissors');
});

results.appendChild(roundResults);

results.appendChild(gameResults);
results.appendChild(finalScore);