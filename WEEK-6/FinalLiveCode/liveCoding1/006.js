/**
  Hapus Simbol Rekursif

  Diberikan sebuah function hapusSimbol(str) yang menerima satu parameter berupa
  string. Function akan me-return string yang telah bersih dari berbagai simbol,
  hanya menyisakan a-z dan angka 0-9.

  RULES:
  - Wajib menggunakan metode rekursif
  - DILARANG menambahkan parameter baru
  - DILARANG membuat variable di luar function hapusSimbolRec
  - DILARANG mengubah tipe data parameter
  - proses looping (while, for, do-while, dan lain-lain) HANYA BOLEH ADA SATU
  - DILARANG menambahkan function di luar maupun di dalam function hapusSimbolRec
  - DILARANG menggunakan built in function .indexOf atau .include
  - DILARANG menggunakan REGEX

**/

function hapusSimbolRec(str) {
  var alphabet09 = 'abcdefghijklmnopqrstuvwxyz0123456789';
  var check = str[0];
  var string = '';
  var str2 = str.slice(1);

  for (var i = 0; i < alphabet09.length; i++) {
    if (check === alphabet09[i]) {
      string += check;
    }
  }

  if (str.length === 0) {
    return string;
  }else {
    if (check === alphabet09[i]) {
      return string + hapusSimbolRec(str2);
    }else {
      check = '';
      return string + hapusSimbolRec(str2);
    }
  }
}


console.log(hapusSimbolRec('test%$4aa')); // test4aa
console.log(hapusSimbolRec('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbolRec('ma@#k!an~')); // makan
console.log(hapusSimbolRec('coding')); // coding
console.log(hapusSimbolRec('1+3-5*2=100')); // 1352100
