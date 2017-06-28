Array.prototype.myEach = function(callback) {
  for (let i=0; i<this.length; i++) {
    callback(this[i]);
  }
};

function printEl(el){
  console.log(el);
}

function addOne(el){
  return el+1;
}

// console.log([1,2,3].myEach(printEl));

Array.prototype.myMap = function(callback) {
  let mapped = [];

  this.myEach(el => mapped.push(callback(el)));
  return mapped;
};

// console.log([1,2,3].myMap(addOne));

Array.prototype.myReduce = function(callback,initialValue) {
  let array = this.slice();

  if (initialValue) {
    array.unshift(initialValue);
  }

  let acc = array[0];

  for (let i = 1; i < array.length; i++){
    acc = callback(acc,array[i]);
  }
  return acc;
};

// console.log([1, 3, 3].myReduce(function(acc, el) {
//   return acc * el;
// }, 10));
