function fpb(angka1, angka2) {
  var faktor1 = [];
  var faktor2 = [];
  var fpb = [];

  for (var i = 1; i <= angka1; i++) {
    if (angka1 % i === 0) {
      faktor1.push(i);
    }
  }
  for (var j = 1; j <= angka2; j++) {
    if (angka2 % j === 0) {
      faktor2.push(j);
    }
  }
  for (var k = 0; k < faktor1.length; k++) {
    for (var l = 0; l < faktor2.length; l++) {
      if (faktor2[l] === faktor1[k]) {
        fpb.push(faktor2[l])
      }
    }
  }
  return Math.max(...fpb);
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
