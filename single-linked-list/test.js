// const assert = require('assert').strict;

// const {SingleLinkedList} = require('./single-linked-list');

// describe('Single-linked list', () => {
//   it('Can be created with variable argument list and turn them into nodes', () => {
//     const list = new SingleLinkedList(5, 4, 1);
//     assert.equal(list.length, 3);
//     assert.equal(list.at(0), 5);
//     assert.equal(list.at(1), 4);
//     assert.equal(list.at(2), 1);
//     assert.equal(list.at(7), undefined);
//   });

//   it('Allows to insert elements', () => {
//     const list = new SingleLinkedList();
//     list.insert(7);
//     list.insert(4);
//     list.insert(5, 0);
//     list.insert(3, 2);
//     assert.equal(list.length, 4);
//     assert.equal(list.at(0), 5);
//     assert.equal(list.at(1), 7);
//     assert.equal(list.at(2), 3);
//     assert.equal(list.at(3), 4);
//     assert.throws(() => list.insert(1, 8));
//   });

//   it('Allows to remove elements', () => {
//     const list = new SingleLinkedList(2, 8, 4, 6, 10, 14, 12);
//     assert.equal(list.remove(), 12);
//     assert.equal(list.remove(3), 6);
//     assert.equal(list.remove(0), 2);
//     assert.equal(list.length, 4);
//     assert.equal(list.at(0), 8);
//     assert.equal(list.at(1), 4);
//     assert.equal(list.at(2), 10);
//     assert.equal(list.at(3), 14);
//     assert.throws(() => list.remove(9));
//   });

//   it('Maps', () => {
//     const source = new SingleLinkedList(5, 3, 9);
//     const list = source.map((x, i) => x * i);
//     assert.equal(source.length, list.length);
//     assert.equal(list.at(0), 0);
//     assert.equal(list.at(1), 3);
//     assert.equal(list.at(2), 18);
//     // check that source is not modified
//     assert.equal(source.at(0), 5);
//     assert.equal(source.at(1), 3);
//     assert.equal(source.at(2), 9);
//     assert.equal(source.length, 3);
//   });

//   it('Filters', () => {
//     const source = new SingleLinkedList(4, 8, 9, 3, 2, 0);
//     const list = source.filter((x, i) => x % 2 === 0 && i % 2);
//     assert.equal(list.length, 2);
//     assert.equal(list.at(0), 8);
//     assert.equal(list.at(1), 0);
//   });

//   it('Reduces', () => {
//     const list = new SingleLinkedList(2, 2, 8);
//     assert.equal(list.reduce((sum, x) => sum + x), 12);
//     assert.equal(list.reduce((sum, x) => sum + x * 2, 0), 24);
//   });

//   it('Sorts', () => {
//     const list = new SingleLinkedList(5, 2, 8);
//     const sorted = list.sort((a, b) => b - a);
//     assert.equal(sorted.at(0), 8);
//     assert.equal(sorted.at(1), 5);
//     assert.equal(sorted.at(2), 2);
//     assert.equal(sorted.length, 3);
//     // check that source is not modified
//     assert.equal(list.at(0), 5);
//     assert.equal(list.at(1), 2);
//     assert.equal(list.at(2), 8);
//     assert.equal(list.length, 3);
//   });

//   it('Is iterable', () => {
//     const list = new SingleLinkedList('a', 'c', 'a', 'b');
//     assert.deepStrictEqual([...list], ['a', 'c', 'a', 'b']);
//     let str = '';
//     for (const c of list) {
//       str += c;
//     }
//     assert.equal(str, 'acab');
//   });
// });
