const assert = require('assert').strict;

// For testing tests
// const SquareSorter = require('./std-sorter');
// const LogSorter = require('./std-sorter');

// uncomment to test
const SquareSorter = require('./bubble-sorter');
const LogSorter = require('./fast-sorter');

testSort('Square', SquareSorter);
testSort('Log', LogSorter);

function testSort(prefix, Sorter) {
  const noop = () => 0;
  const numAsc = (a, b) => a - b;
  const numDesc = (a, b) => b - a;

  describe(`${prefix} time sorter`, () => {
    it('Sorts empty array', () => {
      const sorter = new Sorter(noop);
      const arr = [];
      assert.deepStrictEqual(sorter.sort(arr), arr);
    });

    it('Sorts single number array', () => {
      const sorter = new Sorter(numAsc);
      const arr = [555];
      assert.deepStrictEqual(sorter.sort(arr), arr);
    });

    it('Sorts array of numbers in ascending order', () => {
      const sorter = new Sorter(numAsc);
      const arr = [-1, 3, 1, 2];
      assert.deepStrictEqual(sorter.sort(arr), [-1, 1, 2, 3]);
    });

    it('Sorts array of numbers in descending order', () => {
      const sorter = new Sorter(numDesc);
      const arr = [3, -2, 1, 0, 2];
      assert.deepStrictEqual(sorter.sort(arr), [3, 2, 1, 0, -2]);
    });

    it('Sorts array of numbers with repetitions in ascending order', () => {
      const sorter = new Sorter(numAsc);
      const arr = [-1, 3, -1, 1, 2, 3];
      assert.deepStrictEqual(sorter.sort(arr), [-1, -1, 1, 2, 3, 3]);
    });

    it('Sorts array of objects by string prop', () => {
      const a = {name: 'A'};
      const b = {name: 'B'};
      const c = {name: 'C'};
      const sorter = new Sorter((a, b) => a.name.localeCompare(b.name));
      const arr = [b, c, a];
      assert.deepStrictEqual(sorter.sort(arr), [a, b, c]);
    });

    it('Does not modify source array', () => {
      const sorter = new Sorter(numAsc);
      const arr = [3, 1, 2];
      assert.notEqual(sorter.sort(arr), arr);
      assert.deepStrictEqual(arr, [3, 1, 2]);
    });
  });
}