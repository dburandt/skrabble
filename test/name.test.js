const skrabble = require('../src');

describe('Name tests', () => {
  test('basic array queries to return string.length > 0', () => {
    expect(skrabble({ fieldType: 'name' }).length).toBeGreaterThan(0);
    expect(skrabble({ fieldType: 'fullName' }).length).toBeGreaterThan(0);
    expect(skrabble({ fieldType: 'firstName' }).length).toBeGreaterThan(0);
    expect(skrabble({ fieldType: 'lastName' }).length).toBeGreaterThan(0);
    expect(skrabble({ fieldType: 'prefix' }).length).toBeGreaterThan(0);
    expect(skrabble({ fieldType: 'suffix' }).length).toBeGreaterThan(0);
    expect(skrabble({ fieldType: 'title' }).length).toBeGreaterThan(0);
  });
});
