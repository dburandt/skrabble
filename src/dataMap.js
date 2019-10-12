/* eslint-disable global-require */

const dataMap = {
  // name
  name: require('./data/name/name'),
  fullname: require('./data/name/name'),
  firstname: require('./data/name/firstName'),
  lastname: require('./data/name/lastName'),
  prefix: require('./data/name/prefix'),
  suffix: require('./data/name/suffix'),
  title: require('./data/name/title'),

  // geography
  address: require('./data/geography/address'),
  country: require('./data/geography/country'),
  countrycode: require('./data/geography/countryCode'),
  county: require('./data/geography/county'),
  latitude: require('./data/geography/latitude'),
  lat: require('./data/geography/latitude'),
  longitude: require('./data/geography/longitude'),
  lon: require('./data/geography/longitude'),
  postalcode: require('./data/geography/postalCode'),
  state: require('./data/geography/state'),
  stateabbr: require('./data/geography/stateAbbr'),
  streetsuffix: require('./data/geography/streetSuffix'),
  timezone: require('./data/geography/timeZone'),
  zipcode: require('./data/geography/zipCode'),
  zip: require('./data/geography/zipCode'),
};

module.exports = dataMap;
