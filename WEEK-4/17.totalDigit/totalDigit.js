
function totalDigitRekursif(angka) {
  var lastNum = angka % 10;

  if (angka < 10) {
    return angka;
  }else {
    var remaining = Math.floor(angka / 10);
    return lastNum += totalDigitRekursif(remaining);
  }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
