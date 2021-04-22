class BubbleSorter {
  constructor(comp) {
    this.comp = comp;
  }

  sort(sourceArr) {
    const arr = sourceArr.slice();
    for (let j = arr.length - 1; j > 0; j--) {
      for (let i = 0; i < j; i++) {
        if (this.comp(arr[i], arr[i + 1]) > 0) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
        }
      }
    }
    return arr;
  }
}

module.exports = BubbleSorter;