function naikAngkot(arrPenumpang) {
  var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  var arr = [];

  for (var i = 0; i < arrPenumpang.length; i++) {
      var obj = {};
      var tarif = 0;
      obj['penumpang'] = arrPenumpang[i][0];
      obj['naikDari'] = arrPenumpang[i][1];
      obj['tujuan'] = arrPenumpang[i][2];

      for (var j = 0; j < rute.length; j++) {
        if (rute[j] === arrPenumpang[i][1]) {
          var awal = j;
        }else if (rute[j] === arrPenumpang[i][2]) {
          var akhir = j;
        }
        tarif = 2000 * (akhir - awal);
      }
      obj['bayar'] = tarif;

      arr[i] = obj;
  }
  return arr;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
