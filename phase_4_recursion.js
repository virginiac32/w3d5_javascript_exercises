function range(start, end) {
  if (start === end){
    return [start];
  }
  else {
    let prevArray = range(start,end-1);
    prevArray.push(end);
    return prevArray;
  }
}

// console.log(range(0, 10));

function sumRec(arr) {
  if (arr.length <= 1) {
    return arr[0];
  } else {
    let prevSum = sumRec(arr.slice(0, arr.length-1));
    return prevSum + arr[arr.length-1];
  }
}

console.log(sumRec([5,2,9,4]));
