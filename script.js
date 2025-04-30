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

// Runs playround 5 times and announces a winner at the end
function playGame() {
  // Run playRound 5 times adding 1 to round each time
  for (let i = 1; i <= 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(computerChoice, humanChoice);

    // Print the scores each round
    console.log(`Computer Score: ${computerScore} | Human Score: ${humanScore}`);
  }

  // After 5 rounds print the winner based on who has a heigher score
  if (humanScore > computerScore) {
    console.log(`You win! The final score was ${humanScore} to ${computerScore}`);
  } else if (computerScore > humanScore) {
    console.log(`You lost! The final score was ${computerScore} to ${humanScore}`);
  } else {
    console.log(`The game ended in a draw!`);
  }
}

playGame();