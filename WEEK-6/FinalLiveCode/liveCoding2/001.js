/*
-----------------
RELATION FORECAST
-----------------
PROBLEM
=======
getRelationForecast adalah sebuah program sederhana untuk mendapatkan persentase
seberapa matching laki-laki dan perempuan berdasarkan nama.
Skala persentase adalah dari 0% - 100%.
Untuk setiap kriteria dibawah ini, lakukan perubahan skala.
- tambah 50 jika jumlah huruf a (atau A) di nama male dan female bertotal 5 atau lebih
- tambah 30 jika huruf depan male dan huruf belakang female sama
- tambah 10 jika nama female lebih panjang dari nama male
Otomatis 100 % jika:
  - nama male dan nama female kedua-keduanya memiliki 'kode'.
Ingat, skala tidak boleh melebihi 100%!

RULES
=====
- Dilarang menggunakan regex metode apapun
- Dilarang menggunakan sintaks .includes, .replace, .search.

*/

function getRelationForecast(maleName, femaleName) {
  var scale = 0;
  var initial = maleName[0].toLowerCase();
  var last = femaleName[femaleName.length - 1];
  var str = maleName+femaleName;
  var count = 0;
  var check1 = false;
  var check2 = false;

  if (femaleName.length > maleName.length) {
    scale += 10;
  }
  if (initial === last) {
    scale += 30;
  }
  for (var i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === 'a') {
      count++
    }
  }
  if (count >= 5) {
    scale += 50;
  }
  for (var j = 0; j < maleName.length; j++) {
    var kode1 = maleName[j]+maleName[j + 1]+maleName[j + 2]+maleName[j + 3]
    if (kode1.toLowerCase() === 'kode') {
      check1 = true;
    }
  }
  for (var k = 0; k < femaleName.length; k++) {
    var kode2 = femaleName[k]+femaleName[k + 1]+femaleName[k + 2]+femaleName[k + 3]
    if (kode2.toLowerCase() === 'kode') {
      check2 = true;
    }
  }
  if (check1 === true && check2 === true) {
    scale = 100;
  }


  return scale + '%';
}

console.log(getRelationForecast('Indra', 'Indriani')); // 40%
console.log(getRelationForecast('Arakawa', 'Mirai')); // 50%
console.log(getRelationForecast('Osass', 'Siti')); // 0%
console.log(getRelationForecast('Joe', 'Jeanne')); // 10%
console.log(getRelationForecast('Nameless Koder', 'Do Nothing but kodeing')); // 100%
