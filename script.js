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
  // Make sure that humanChoice is downcase

  // If computerChoice loses to humanChoice then print 'You win!' and adds 1 to humanScore
  if (
    humanChoice === 'rock' && computerChoice === 'scissors' || 
    humanChoice === 'scissors' && computerChoice === 'paper' ||
    humanChoice === 'paper' && computerChoice === 'rock') {

      humanScore += 1;
      console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
    
  // If computerChoice equals humanChoice then print 'It's a draw!'
  } else if (humanChoice === computerChoice) {
    console.log(`The game is a draw!`);
  
  // If computerChoice beats humanChoice then print 'You lose!' and adds 1 to computer score
  } else {
    computerScore += 1;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
  };

};

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

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