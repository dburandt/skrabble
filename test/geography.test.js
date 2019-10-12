const skrabble = require('../src');

describe('Geography tests', () => {
  test('basic array queries to return string.length > 0', () => {
    expect(skrabble('country').length).toBeGreaterThan(0);
    expect(skrabble('countryCode').length).toBeGreaterThan(0);
    expect(skrabble('county').length).toBeGreaterThan(0);
    expect(skrabble('state').length).toBeGreaterThan(0);
    expect(skrabble('stateAbbr').length).toBeGreaterThan(0);
    expect(skrabble('streetSuffix').length).toBeGreaterThan(0);
    expect(skrabble('timeZone').length).toBeGreaterThan(0);
  });

  test('address to return string with > 3 words', () => {
    expect(skrabble('address').split(' ').length).toBeGreaterThan(2);
  });

  test('latitude to return value between -90, 90', () => {
    expect(parseFloat(skrabble('latitude'))).toBeGreaterThanOrEqual(-90);
    expect(parseFloat(skrabble('latitude'))).toBeLessThanOrEqual(90);
  });

  test('longitude to return value between -180, 180', () => {
    expect(parseFloat(skrabble('longitude'))).toBeGreaterThanOrEqual(-180);
    expect(parseFloat(skrabble('longitude'))).toBeLessThanOrEqual(180);
  });

  test('postal code to return string with 2 words', () => {
    expect(skrabble('postalCode').split(' ').length).toEqual(2);
  });

  test('zip code to be 5 digit integer', () => {
    expect(parseInt(skrabble('zipCode'), 10)).toBeGreaterThanOrEqual(10001);
    expect(parseInt(skrabble('zipCode'), 10)).toBeLessThanOrEqual(99999);
  });
});
