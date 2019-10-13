const skrabble = require('../src');

describe('Index tests', () => {
  test('invalid input to throw error', () => {
    expect(() => skrabble(0)).toThrowError(TypeError);
  });

  test('invalid dataType to throw error', () => {
    expect(() => skrabble('nonsenseWord')).toThrowError(RangeError);
  });

  test('valid dataType to return string.length > 0', () => {
    expect(skrabble('name').length).toBeGreaterThan(0);
  });
});
