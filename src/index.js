const dataMap = require('./datamap');
const { getRandomInt } = require('./random');

function skrabble(dataType) {
  if (typeof dataType !== 'string') {
    throw new TypeError('expected dataType to be a string');
  }

  const normalizedDataType = dataType.toLowerCase();
  const data = dataMap[normalizedDataType];

  if (!data) {
    throw new RangeError('dataType parameter not valid');
  }

  const randomIndex = getRandomInt(data.length);
  return data[randomIndex];
}

module.exports = skrabble;
