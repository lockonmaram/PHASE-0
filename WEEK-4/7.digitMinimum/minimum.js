function digitPerkalianMinimum(angka) {
  var faktor = [];
  var faktor2 = [];
  var string;

  for (var i = 1; i <= angka; i++) {
    if (angka % i === 0) {
      faktor.push(i);
    }
  }
  if (faktor.length === 1) {
    faktor.push(1);
    faktor2.push(faktor[faktor.length / 2 - 1 ]);
    faktor2.push(faktor[faktor.length / 2 ]);
  }else if (faktor.length > 1) {
    faktor2.push(faktor[faktor.length / 2 - 1 ]);
    faktor2.push(faktor[faktor.length / 2 ]);
  }
  string = faktor2[0].toString()+faktor2[1].toString();
  
  return string.length;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
