function cariModus(arr) {
  var obj = {};
  var count = 0;
  var modus;
  var mean;
  var sum = 0;

  arr.sort();

  for (var i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]]++;
    }else {
      obj[arr[i]] = 1;
    }
  }

  var val = Object.values(obj);

  for (var j = 0; j < val.length; j++) {
    sum += val[j];
  }
  mean = sum / val.length;
  Math.round(mean);

  for (var k = 0; k < arr.length; k++) {
    if (val[k] === mean) {
      modus = -1;
    }else if (obj[arr[k]] === arr.length) {
      modus = -1;
    }else if (obj[arr[k]] > obj[arr[k+1]]) {
      count += obj[arr[k+1]]
      modus = arr[k];
    }else if (count < obj[arr[k]]) {
      count += obj[arr[k]];
      modus = arr[k];
    }
  }
  return modus;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
console.log(cariModus([ 5, 5, 6, 6, 3, 1, 2, 7, 7])); // -1
