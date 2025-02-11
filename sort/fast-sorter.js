function swap(items, firstIndex, secondIndex) {
  const temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

function partition(items, left, right, comp) {
  let pivot = items[Math.floor((right + left) / 2)],
    i = left,
    j = right;
  while (i <= j) {
    while (comp(items[i], pivot) < 0) {
      i++;
    }
    while (comp(items[j], pivot) > 0) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j);
      i++;
      j--;
    }
  }
  return i;
}

class FastSorter {
  constructor(comp) {
    this.comp = comp;
  }

  sort(items, left, right) {
    let index;
    if (left===undefined&&right===undefined){
      left = 0;
      right = items.length - 1;
      items = items.slice();
    }
    if (items.length > 1) {
      index = partition(items, left, right, this.comp);
      if (left < index - 1) {
        this.sort(items, left, index - 1);
      }
      if (index < right) {
        this.sort(items, index, right);
      }
    }
    return items;
  }
}

module.exports = FastSorter;

