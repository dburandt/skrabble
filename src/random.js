function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports = { getRandomInt, getRandomIntFromInterval };
