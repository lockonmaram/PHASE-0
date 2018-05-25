function tentukanDeretAritmatika(arr) {
  var i = 0;
  var a = arr[i];
  var b = arr[i+1] - arr[i]

  if (arr[arr.length - 1] === a + (((arr.length) - 1)*b)) {
    return true
  }else {
    return false
  }
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
