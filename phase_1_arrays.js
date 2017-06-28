Array.prototype.uniq = function() {
  let onlyEls = [];

   this.forEach(el => {
     if (!(onlyEls.includes(el))) {
       onlyEls.push(el);
     }
   });
   return onlyEls;
};

// console.log([1,4,2,3,4,3].uniq());

Array.prototype.twoSum = function() {
  let pairs = [];

  for (let i = 0; i < this.length-1; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        pairs.push([i, j]);
      }
    }
  }

  return pairs;
};

// console.log([0, -1, 1, 0].twoSum());
// console.log([3, -1, -3, 0].twoSum());

Array.prototype.transpose = function() {
  let transposed = [];

  for (let col = 0; col < this[0].length; col++) {
    let transRow = [];
    for (let row = 0; row < this.length; row++) {
      transRow.push(this[row][col]);
    }
    transposed.push(transRow);
  }

  return transposed;
};

// console.log([[1,2], [3,4]].transpose());
// console.log([[1,2,3,4], [5,6,7,8]].transpose());
