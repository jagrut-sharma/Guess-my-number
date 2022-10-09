'use strict';

const againBtn = document.querySelector('.again');
const checkBtn = document.querySelector('.check');
const userGuess = document.querySelector('.guess');
const message = document.querySelector('.message');
const hiddenNumber = document.querySelector('.number');
const body = document.querySelector('body');
const currentScore = document.querySelector('.score');
const currentHighScore = document.querySelector('.highscore');

let highScore = 0,
  score = 20;
checkBtn.addEventListener('click', checkClickHandler);

function secretNumberGenerator() {
  return Math.floor(Math.random() * 20) + 1;
}

let secretNumber = secretNumberGenerator();

function checkClickHandler() {
  console.log(secretNumber);
  const guessedNumber = Number(userGuess.value);
  if (guessedNumber) {
    compareNumbers(secretNumber, guessedNumber);
  } else {
    message.innerText = '⛔ No number guessed';
  }
}

function compareNumbers(secretNumber, guessedNumber) {
  if (secretNumber === guessedNumber) {
    message.innerText = '✅ Correct Guess';
    hiddenNumber.textContent = secretNumber;
    body.style.backgroundColor = 'green';
    checkBtn.disabled = true;
    highScoreChecker();
  } else if (secretNumber < guessedNumber) {
    message.textContent = `📉 Guess lower`;
    scoreHandler();
  } else if (secretNumber > guessedNumber) {
    message.textContent = `📈 Guess higher`;
    scoreHandler();
  }
}

function scoreHandler() {
  if (score === 1) {
    currentScore.textContent = `0`;
    message.textContent = `🛑 Game Over`;
  } else {
    score--;
    currentScore.textContent = score;
  }
}

function highScoreChecker() {
  if (score > highScore) {
    highScore = score;
    currentHighScore.textContent = highScore;
  }
}

againBtn.addEventListener('click', againClickHandler);

function againClickHandler() {
  checkBtn.disabled = false;
  userGuess.value = '';
  hiddenNumber.textContent = '?';
  secretNumber = secretNumberGenerator();
  body.style.backgroundColor = '#222';
  message.innerText = 'Start guessing...';
  score = 20;
  currentScore.textContent = score;
}
