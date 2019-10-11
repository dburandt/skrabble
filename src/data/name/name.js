const getRandomInt = require('../../random');
const firstName = require('./firstName');
const lastName = require('./lastName');

const randomFirstName = firstName[getRandomInt(firstName.length)];
const randomLastName = lastName[getRandomInt(lastName.length)];

const name = `${randomFirstName} ${randomLastName}`;

module.exports = name;
