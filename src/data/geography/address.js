const { getRandomInt, getRandomIntFromInterval } = require('../../random');
const lastName = require('../name/lastName');
const streetSuffix = require('./streetSuffix');

const randomStreetNumber = getRandomIntFromInterval(1, 999);
const randomStreetName = lastName[getRandomInt(lastName.length)];
const randomStreetSuffix = streetSuffix[getRandomInt(streetSuffix.length)];

const address = [
  `${randomStreetNumber} ${randomStreetName} ${randomStreetSuffix}`,
];

module.exports = address;
