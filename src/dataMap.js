/* eslint-disable global-require */

const dataMap = {
  firstname: require('./data/name/firstName'),
  lastname: require('./data/name/lastName'),
  name: require('./data/name/name'),
  fullname: require('./data/name/name'),
  prefix: require('./data/name/prefix'),
  suffix: require('./data/name/suffix'),
  title: require('./data/name/title'),
};

module.exports = dataMap;
