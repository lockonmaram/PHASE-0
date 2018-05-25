function ubahHuruf(kata) {
  var arr = kata.split('');
  var char;
  var ascii;
  var kata2 = '';

  for (var i = 0; i < arr.length; i++) {
    char = arr[i];
    ascii = kata.charCodeAt(i);
    char = String.fromCharCode(((ascii - 97 + 1) % 26) + 97);
    kata2 += char;
  }
  return kata2;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
