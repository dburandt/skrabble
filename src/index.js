const dataMap = require('./datamap');
const { getRandomInt } = require('./random');

function skrabble(dataType) {
  if (typeof dataType !== 'string') {
    return '';
  }

  const normalizedDataType = dataType.toLowerCase();
  const data = dataMap[normalizedDataType];

  if (!data) {
    return '';
  }

  if (typeof data === 'string') {
    return data;
  }

  const randomIndex = getRandomInt(data.length);
  return data[randomIndex];
}

module.exports = skrabble;
