function pasanganTerbesar(num) {
  var arr = num.toString();
  var split = arr.split('');
  var two = [];

  for (var i = 0; i < split.length - 1; i++) {
    two[i] = split[i]+split[i+1]
    }
  return Math.max(...two)
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
