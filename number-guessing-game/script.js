let randomNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;

// Get Element Html
const guessInput = document.getElementById("guessNumber");
const guessButton = document.getElementById("guessButton");
const message = document.getElementById("message");
const restartButton = document.getElementById("restartButton");

function checkGuess() {
  const userGuess = Number(guessInput.value);
  //after chach user guess, attemps ++
  attempts++;

  if (userGuess === randomNumber) {
    message.textContent = `Congratulations! You Guessed the Number ${randomNumber} correctly in ${attempts} attemps.`;
    message.style.color = "#28a745";
    endGame();
  } else if (userGuess > randomNumber) {
    message.textContent = "To hight! Try Again.";
    message.style.color = "#dc3545";
  } else if (userGuess < randomNumber) {
    message.textContent = "To low! Try Again.";
    message.style.color = "#dc3545";
  }

  guessInput = '';
  guessInput.focus();
}

function endGame() {
  guessInput.disabled = true;
  guessButton.disabled = true;
  restartButton.style.display = "inline";
}

function resetGame() {
  attempts = 0;
  randomNumber = Math.floor(Math.random() * 100) + 1;
  guessInput.disabled = false;
  guessButton.disabled = false;
  message.textContent = "Good Luck ! Start Guessing . . .";
  message.style.color = "#333333";
  restartButton.style.display = "none";
  guessInput.value = "";
  guessInput.focus();
}

guessButton.addEventListener("click", checkGuess);

restartButton.addEventListener("click", resetGame);

guessInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkGuess();
  }
});
