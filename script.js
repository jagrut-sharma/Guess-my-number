'use strict';

const againBtn = document.querySelector('.again');
const checkBtn = document.querySelector('.check');
const userGuess = document.querySelector('.guess');
const message = document.querySelector('.message');
const hiddenNumber = document.querySelector('.number');
const body = document.querySelector('body');
let highScore = 0;
checkBtn.addEventListener('click', clickHandler);

function secretNumberGenerator() {
  return Math.floor(Math.random() * 20) + 1;
}

let secretNumber = secretNumberGenerator();

function clickHandler() {
  console.log(secretNumber);
  const guessedNumber = Number(userGuess.value);
  if (guessedNumber) {
    compareNumbers(secretNumber, guessedNumber);
  } else {
    message.innerText = '🚫 No number guessed';
  }
}

function compareNumbers(secretNumber, guessedNumber) {
  if (secretNumber === guessedNumber) {
    message.innerText = '✅ Correct Guess';
    hiddenNumber.textContent = secretNumber;
    body.style.backgroundColor = 'green';
    checkBtn.disabled = true;
  } else if (secretNumber < guessedNumber) {
    message.textContent = `📉 Guess lower`;
  } else if (secretNumber > guessedNumber) {
    message.textContent = `📈 Guess higher`;
  }
}
