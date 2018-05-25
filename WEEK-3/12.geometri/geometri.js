function tentukanDeretGeometri(arr) {
  var i = 0;
  var a = arr[i];
  var r = arr[i+1]/arr[i];

  if (arr[arr.length - 1] === a*Math.pow(r, arr.length - 1)) {
    return true;
  }else {
    return false;
  }
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
