/**
Even Pairs Sum
--------------
Implementasikan function `evenPairsSum` yang akan menjumlahkan pasangan-pasangan angka genap yang
ada di dalam `str`.
Contoh
- input: '34102180'
  pasangan: 34, 10, 21, 80
  output: 124
  Karena ada pasangan genap (34, 10, 80) maka akan dijumlahkan

- input: '31913791'
  pasangan: 31, 91, 37, 91
  output: 0
  Karena tidak ada pasangan genap

- input: '2130113'
  pasangan: 21, 30, 11, 32
  output: 62
  Karena ada pasangan genap (30, 32) maka akan dijumlahkan

NOTE: Jika angka terakhir tidak memiliki pasangan, maka pasangkan dengan angka pertama seperti
      pada contoh terakhir

RULES:
 - WAJIB MENGGUNAKAN algoritma/pseudocode, tidak menyertakan algoritma/pseudocode maka codingan dianggap tidak valid

*/
/*
-GET str
-GET sum = 0
-GET arr (empty array)
-FOR each element in str I += 2
  add I two number of str to arr
-IF length of last number in arr is 1
  add (last element in str + first element in str) to arr
-FOR each element in arr J BUMP
  IF J in arr is even
    sum += J in arr
-PRINT sum
*/
function evenPairsSum (str) {
  var arr = [];
  var sum = 0;

  for (var i = 0; i < str.length; i += 2) {
      var str2 = str.slice(i,i+2)
      arr.push(str2);
  }
  if (arr[arr.length - 1].length === 1) {

    arr.push(str[str.length - 1]+str[0])
  }

  for (var j = 0; j < arr.length; j++) {
    if (Number(arr[j]) % 2 === 0) {
      sum += Number(arr[j]);
    }
  }
  return sum;
}

console.log(evenPairsSum('2044101211')); // 86
console.log(evenPairsSum('33791363')); // 0
console.log(evenPairsSum('23426766201')); // 140
console.log(evenPairsSum('2478201')); // 134
