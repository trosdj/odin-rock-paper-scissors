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
function getHumanChoice() {
  // Create a variable called humanChoice
  let humanChoice;
  
  // Ask usr for a choice of rock paper or scissors and store it in humanChoice
  humanChoice = prompt(`Please choose rock, paper, or scissors: `);
  
  // Return humanChoice
  return humanChoice.toLowerCase();
};

// Create variables for humanScore and computerScore and set them to 0
let humanScore, computerScore = 0;

// Function that plays a single round that takes in computerChoice and humanChoice
function playRound(computerChoice, humanChoice) {
  // Make sure that humanChoice is downcase

  // If computerChoice loses to humanChoice then print 'You win!'
  if (
    humanChoice === 'rock' && computerChoice === 'scissors' || 
    humanChoice === 'scissors' && computerChoice === 'paper' ||
    humanChoice === 'paper' && computerChoice === 'rock') {
      console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
  } else {
    console.log('Something is wrong.')
  }
  // If computerChoice beats humanChoice then print 'You lose!'
};

// Tests if playRound is working
let computerChoice = getComputerChoice();
console.log(computerChoice);

let humanChoice = getHumanChoice();

playRound(computerChoice, humanChoice);