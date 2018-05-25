
/*
Count solo
===========
Diberikan sebuah function countSolo, dimana function ini akan menerima parameter sebagai array
dan akan mereturn total jumlah dari angka angka yang TIDAK memiliki pasangan.

Example:
input: [ 5, 5, 6, 6, 3, 1, 2, 7, 7 ]
proses: 3 + 1 + 2
result: 6

RULES:
 - TIDAK BOLEH MENGGUNAKAN built in function .map, .filter, .reduce!
 - TIDAK BOLEH MENGGUNAKAN built in function .indexOf dan .include!

*/
/*
function countSolo (numbers) {
  var sum = 0;
  var sum2 = 0;
  var sort = numbers.sort();
  var arr = [];
  var arr2 = [];
  var arr3 = [];
  var arr4 = [];

  for (var i = 0; i < sort.length; i++) {
    if (sort[i] !== sort[i+1]) {
      arr.push(sort[i]);
    }else {
      arr2.push(sort[i]);
    }
  }
  for (var j = 0; j < arr2.length; j++) {
    if (arr2[j] !== arr2[j+1]) {
      arr3.push(arr2[j]);
    }
  }
  for (var k = 0; k < arr.length; k++) {
    sum += arr[k];
  }
  for (var l = 0; l < arr3.length; l++) {
    sum2 += arr3[l];
  }
  var result = sum - sum2;


  return result;
}*/

function countSolo(numbers){
  var obj = {};
  var sort = numbers.sort();
  var sum = 0;
  var arr = [];

  for (var i = 0; i < sort.length; i++) {
    var num = sort[i];
    if (obj[num] === undefined) {
      obj[num] = 1;
    }else {
      obj[num]++;
    }
  }
  var keys = Object.keys(obj);
  var val = Object.values(obj);
  for (var j = 0; j < Object.keys(obj).length; j++) {
    if (obj[keys[j]] === 1) {

    }
  }


  return obj[keys[2]];

}

console.log(countSolo([ 5, 5, 6, 6, 3, 1, 2, 7, 7])) // 6
console.log(countSolo([ 3, 6, 3, 6, 1, 1, 2, 1 ]))  // 2
console.log(countSolo([ 3, 3, 3, 3, 4, 5, 8, 10, 11 ])) // 38
