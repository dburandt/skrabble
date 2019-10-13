const { getRandomIntFromInterval } = require('../../random');

const zipCode = [getRandomIntFromInterval(10001, 99999).toString()];

module.exports = zipCode;
