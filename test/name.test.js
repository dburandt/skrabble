const skrabble = require('../src');

describe('Name tests', () => {
  test('basic array queries to return string.length > 0', () => {
    expect(skrabble('name').length).toBeGreaterThan(0);
    expect(skrabble('fullName').length).toBeGreaterThan(0);
    expect(skrabble('firstName').length).toBeGreaterThan(0);
    expect(skrabble('lastName').length).toBeGreaterThan(0);
    expect(skrabble('prefix').length).toBeGreaterThan(0);
    expect(skrabble('suffix').length).toBeGreaterThan(0);
    expect(skrabble('title').length).toBeGreaterThan(0);
  });
});
