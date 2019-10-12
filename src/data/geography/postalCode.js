const { getRandomInt, getRandomIntFromInterval } = require('../../random');
const letter = require('../misc/letter');

const firstLetter = letter[getRandomInt(letter.length)];
const firstNumber = getRandomIntFromInterval(0, 9);

const secondLetter = letter[getRandomInt(letter.length)];
const secondNumber = getRandomIntFromInterval(0, 9);

const thirdLetter = letter[getRandomInt(letter.length)];
const thirdNumber = getRandomIntFromInterval(0, 9);

const postalCode = `${firstLetter}${firstNumber}${secondLetter} ${secondNumber}${thirdLetter}${thirdNumber}`;

module.exports = postalCode;
