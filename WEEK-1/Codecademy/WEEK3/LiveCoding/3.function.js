function mergeStrings(str1, str2, str3, str4) {
  return str1+'-'+str2+'-'+str3+'-'+str4
}
console.log(mergeStrings('satu', 'dua', 'tiga', 'empat'));

function evenSiblings(num) {
  for (var i = 1; i <= num; i++) {
    if (i % 2 === 0) {

      console.log(i);
    }
  }
}
evenSiblings(15)

function remainder (num1, num2) {
  return sisa = num1 % num2
  console.log(sisa);
}
console.log(remainder(7, 3))
