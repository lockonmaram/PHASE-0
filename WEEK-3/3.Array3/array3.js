function dataHandling2(input) {

  input.splice(1, 1, 'Roman Alamsyah Elsharawy');
  input.splice(2, 1, 'Provinsi Bandar Lampung');
  input.splice(4, 1, 'Pria');
  input.splice(5, 0, 'SMA Internasional Metro');

  var tanggal = input[3];
  var tanggalSplit = tanggal.split('/');
  var tanggalSplit2 = tanggal.split('/');
  var bulan = Math.floor(tanggalSplit[1]);
  var nama = input[1];

  switch(bulan) {
    case 1:   { namaBulan = 'Januari'; break; }
    case 2:   { namaBulan = 'Februari'; break; }
    case 3:   { namaBulan = 'Maret'; break; }
    case 4:   { namaBulan = 'April'; break; }
    case 5:   { namaBulan = 'Mei'; break; }
    case 6:   { namaBulan = 'Juni'; break; }
    case 7:   { namaBulan = 'July'; break; }
    case 8:   { namaBulan = 'Agustus'; break; }
    case 9:   { namaBulan = 'September'; break; }
    case 10:   { namaBulan = 'Oktober'; break; }
    case 11:   { namaBulan = 'November'; break; }
    case 12:   { namaBulan = 'Desember'; break; }
    default:  { namaBulan = ' '; break; }
  }

  console.log(input);
  console.log(namaBulan);
  console.log(tanggalSplit.sort(function(value1, value2){return value2 - value1}));
  console.log(tanggalSplit2.join('-'));
  console.log(nama.slice(0,15))
}
dataHandling2(["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"])
