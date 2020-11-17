const skrabble = require('../src');

describe('Geography tests', () => {
  test('basic array queries to return string.length > 0', () => {
    expect(skrabble({ fieldType: 'country' }).length).toBeGreaterThan(0);
    expect(skrabble({ fieldType: 'countryCode' }).length).toBeGreaterThan(0);
    expect(skrabble({ fieldType: 'county' }).length).toBeGreaterThan(0);
    expect(skrabble({ fieldType: 'state' }).length).toBeGreaterThan(0);
    expect(skrabble({ fieldType: 'stateAbbr' }).length).toBeGreaterThan(0);
    expect(skrabble({ fieldType: 'streetSuffix' }).length).toBeGreaterThan(0);
    expect(skrabble({ fieldType: 'timeZone' }).length).toBeGreaterThan(0);
  });

  test('address to return string with > 3 words', () => {
    expect(
      skrabble({ fieldType: 'address' }).split(' ').length,
    ).toBeGreaterThan(2);
  });

  test('latitude to return value between -90, 90', () => {
    expect(
      parseFloat(skrabble({ fieldType: 'latitude' })),
    ).toBeGreaterThanOrEqual(-90);
    expect(parseFloat(skrabble({ fieldType: 'latitude' }))).toBeLessThanOrEqual(
      90,
    );
  });

  test('longitude to return value between -180, 180', () => {
    expect(
      parseFloat(skrabble({ fieldType: 'longitude' })),
    ).toBeGreaterThanOrEqual(-180);
    expect(
      parseFloat(skrabble({ fieldType: 'longitude' })),
    ).toBeLessThanOrEqual(180);
  });

  test('postal code to return string with 2 words', () => {
    expect(skrabble({ fieldType: 'postalCode' }).split(' ').length).toEqual(2);
  });

  test('zip code to be 5 digit integer', () => {
    expect(
      parseInt(skrabble({ fieldType: 'zipCode' }), 10),
    ).toBeGreaterThanOrEqual(10001);
    expect(
      parseInt(skrabble({ fieldType: 'zipCode' }), 10),
    ).toBeLessThanOrEqual(99999);
  });
});
