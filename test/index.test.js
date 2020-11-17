const skrabble = require('../src');

describe('Index tests', () => {
  test('invalid input to throw error', () => {
    expect(() => skrabble({})).toThrowError(TypeError);
    expect(() => skrabble({ fieldType: 0 })).toThrowError(TypeError);
  });

  test('invalid dataType to throw error', () => {
    expect(() => skrabble({ fieldType: 'nonsenseWord' })).toThrowError(
      RangeError,
    );
  });

  test('valid dataType to return string.length > 0', () => {
    expect(skrabble({ fieldType: 'name' }).length).toBeGreaterThan(0);
  });
});
