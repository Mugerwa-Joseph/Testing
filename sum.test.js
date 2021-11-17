const { TestWatcher } = require('@jest/core');
const sum = require('./sum');

test('Confirms the right summation ', () => {
    expect(sum(4, 3)).toBe(7);
});