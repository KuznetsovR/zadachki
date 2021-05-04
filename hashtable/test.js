const assert = require('assert').strict;

const {HashTable} = require('./hash-table');

describe('HashTable', () => {
  it('set, get and remove key-value pairs', () => {
    const map = new HashTable();
    map.set(123, 'asd');
    map.set('dsa', 987);
    map.set('', 'poi');
    map.set(0, 567);
    map.set('', 'empty');
    map.set(123, 'zzz');
    map.remove('dsa');
    assert.equal(map.get('dsa'), undefined);
    assert.equal(map.get(123), 'zzz');
    assert.equal(map.get(''), 'empty');
    assert.equal(map.get(0), 567);
  });

  it('HashTable.from allows to create map from array of [key, value] or {key, value}', () => {
    const arrs = [
      [123, 'asd'],
      ['', 'emp'],
      [123, 987],
      ['aaa', 'bbb'],
    ];
    const objs = arrs.map(([key, value]) => ({key, value}));
    let map = HashTable.from(arrs);
    assert.equal(map.get(123), 987);
    assert.equal(map.get(''), 'emp');
    assert.equal(map.get('aaa'), 'bbb');
    map = HashTable.from(objs);
    assert.equal(map.get(123), 987);
    assert.equal(map.get(''), 'emp');
    assert.equal(map.get('aaa'), 'bbb');
  });

  it('iterates over the map', () => {
    const keyvalues = {
      123: 'asd',
      '': 'emp',
      'abc': 'cba',
    };
    const forMap = Object.keys(keyvalues).map(key => [key, keyvalues[key]]);
    const map = HashTable.from(forMap);
    for (const [key, value] of map) {
      assert.equal(value, keyvalues[key]);
      const deleted = delete keyvalues[key];
      assert.equal(deleted, true);
    }
    // Did we iterate over all keys?
    assert.equal(Object.keys(keyvalues), 0);
  });
});
