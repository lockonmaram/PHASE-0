function kaliTerusRekursif(angka) {
  var lastNum = angka % 10;

  if (angka < 10) {
    return angka;
  }else {
    var remaining = Math.floor(angka / 10);
    return lastNum *= kaliTerusRekursif(remaining);
  }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
