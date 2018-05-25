function targetTerdekat(arr) {
  var count = 0;
  var xLoc = [];
  var oLoc = [];
  var dist = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 'x') {
      xLoc.push(i);
    }
    if (arr[i] === 'o') {
      oLoc.push(i);
    }
  }
  for (var i = 0; i < xLoc.length; i++) {
    var subt = xLoc[i] - oLoc[0];
    subt = Math.abs(subt);
    dist.push(subt);
  }
  if (dist.length > 0) {
    return Math.min.apply(null, dist);
  }else if (dist.length <= 0) {
    return 0;
  }
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
