const dataMap = require('./dataMap');
const getRandomInt = require('./random');

function skrabble(dataType) {
  const normalizedDataType = dataType.toLowerCase();
  const data = dataMap[normalizedDataType];

  if (typeof data === 'string') {
    return data;
  }

  const randomIndex = getRandomInt(data.length);
  return data[randomIndex];
}

module.exports = skrabble;
