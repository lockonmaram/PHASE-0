/*
****************
Advanced Seating
****************
trainSeating adalah sebuah function yang menerima parameter berupa array of object.
Yang harus mengeluarkan hasil sebuah object yang memiliki isi key berdasarkan jenis gerbong penumpang.
Yang berisi daftar nama penumpang dan tempat duduk penumpang.

Contoh input dan output bisa dilihat di test case.


*/

function trainSeating (penumpang) {
  var obj = {
    VVIP: [],
    VIP: [],
    Regular:[]
  }

  var vvip = [];
  var vip = [];
  var reg = [];

  for (var i = 0; i < penumpang.length; i++) {
    var obj2 = {nama: '', seat: ''};
    var obj3 = {nama: '', seat: ''};
    var obj4 = {nama: '', seat: ''};
    var name = penumpang[i].nama;
    var status = penumpang[i].gerbong;
    var duduk = penumpang[i].seat;

    if (status === 'VVIP') {
      obj2.nama = name;
      obj2.seat = duduk;
      vvip.push(obj2);
    }else if (status === 'VIP') {
      obj3.nama = name;
      obj3.seat = duduk;
      vip.push(obj3);
    }else if (status === 'Regular') {
      obj4.nama = name;
      obj4.seat = duduk;
      reg.push(obj4);
    }
  }
  obj.VVIP = vvip;
  obj.VIP = vip;
  obj.Regular = reg;

  return obj;
}


console.log(trainSeating([
  { nama: "Awtian", gerbong: "VVIP", seat: 'A1' },
  { nama: "Klonoa", gerbong: "VIP", seat: 'V1' },
  { nama: "Azizy", gerbong: "VVIP", seat: 'A2' },
  { nama: "Crash", gerbong: "Regular", seat: 'R1' },
  { nama: "Sena", gerbong: "Regular", seat: 'R3' },
  { nama: "Retsu", gerbong: "VIP", seat: 'V2' },
  { nama: "Hiruma", gerbong: "VVIP", seat: 'A666' },
  { nama: "Tsubasa", gerbong: "VIP", seat: 'V6' }
]));
/*
Output :
{
  VVIP:
   [ { nama: 'Awtian', seat: 'A1' },
     { nama: 'Azizy', seat: 'A2' },
     { nama: 'Hiruma', seat: 'A666' } ],
  VIP:
   [ { nama: 'Klonoa', seat: 'V1' },
     { nama: 'Retsu', seat: 'V2' },
     { nama: 'Tsubasa', seat: 'V6' } ],
  Regular:
    [ { nama: 'Crash', seat: 'R1' },
      { nama: 'Sena', seat: 'R3' } ]
}
*/
