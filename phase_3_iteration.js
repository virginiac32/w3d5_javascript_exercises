String.prototype.substrings = function() {
  let subs = [];
  let sub = "";

  for (let i = 0; i < this.length; i++) {
    for (let j = i+1; j < this.length+1; j++) {
      sub = this.slice(i,j);
      subs.push(sub);
    }
  }

  return subs;
};

// console.log("heyguys".substrings());

Array.prototype.bubbleSort = function() {
  let array = this.slice();
  let temp = null;

  // for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length-1; j++) {
      if (array[j+1] < array[j]) {
        temp = array[j+1];
        array[j+1] = array[j];
        array[j] = temp;
      }
    }
  // }
  return array;
};

console.log([45,23,8,9,10,1].bubbleSort());
