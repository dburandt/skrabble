const skrabble = require('../src');

describe('Index tests', () => {
  test('invalid input to return empty string', () => {
    expect(skrabble(0)).toEqual('');
  });

  test('invalid dataType to return empty string', () => {
    expect(skrabble('nonsenseWord')).toEqual('');
  });

  test('valid dataType to return string.length > 0', () => {
    expect(skrabble('name').length).toBeGreaterThan(0);
  });
});
