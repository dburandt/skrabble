const dataMap = require('./datamap');
const { getRandomInt } = require('./random');

function skrabble({ fieldType, amount = 1, allowDuplicates = false }) {
  if (typeof fieldType !== 'string') {
    throw new TypeError('expected fieldType to be a string');
  }

  const normalizedFieldType = fieldType.toLowerCase();
  const data = dataMap[normalizedFieldType];

  if (!data) {
    throw new RangeError('fieldType parameter not valid');
  }

  const randomIndex = getRandomInt(data.length);
  return data[randomIndex];
}

module.exports = skrabble;
