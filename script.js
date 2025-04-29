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
