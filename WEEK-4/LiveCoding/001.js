/*
==================================
Array Mastery: Who's the winner?
==================================
Nama:________
[INSTRUKSI]
Ada dua tim, Gryffindor dan Slytherin yang sedang bertarung pada sebuah kompetisi futsal.
Function whosTheWinner akan menerima suatu parameter beruapa array berisikan nama
tim yang sudah mencetak gol. Apabila pada array jumlah "Gryffindor" lebih banyak
daripada "Slytherin" maka function akan mereturn "Gryffindor Juara Futsal Hogwarts 2018".
Sedangkan jika jumlah "Slytherin" lebih banyak daripada "Gryffindor" maka function
akan mereturn "Slytherin Juara Futsal Hogwarts 2018". Jika jumlah kedua tim sama,
maka function akan mereturn "Draw, pertandingan akan dilanjutkan dengan penalty kick!"

Let's start our own wizardy, shall we?

[RULE]
- Wajib menuliskan algoritma/pseudocode. Tidak ada algoritma/pseudocode atau
  algoritma/pseudocode tidak match dengan kode maka indikasi soal tidak
  diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan method .map, .filter, atau .reduce!

*/

/*pseudocode
-FIND goals
-SET team1SCore to 0
-SET team2Score to 0
-SET i to 0
-FOR i less than goals length
  i increment
    IF element i of goals is 'Gryffindor'
      team1Score increment
    ELSE IF element i of goals is 'Slytherin'
      team2Score increment
-IF team1Score is more than team2Score
    RETURN 'Gryffindor Juara Futsal Hogwarts 2018'
  ELSE IF team1SCore is less than team2Score
    RETURN 'Slytherin Juara Futsal Hogwarts 2018'
  ELSE IF team1Score is same as team2Score
    RETURN 'Draw, pertandingan akan dilanjutkan dengan penalty kick!'
*/

function whosTheWinner(goals) {
  var team1Score = 0;
  var team2Score = 0;

  for (var i = 0; i < goals.length; i++) {
    if (goals[i] === 'Gryffindor') {
      team1Score++
    }else if (goals[i] === 'Slytherin') {
      team2Score++
    }
  }
  if (team1Score > team2Score) {
    return 'Gryffindor Juara Futsal Hogwarts 2018'
  }else if (team1Score < team2Score) {
    return 'Slytherin Juara Futsal Hogwarts 2018'
  }else if (team1Score === team2Score) {
    return 'Draw, pertandingan akan dilanjutkan dengan penalty kick!'
  }
}

// TEST CASES
console.log(whosTheWinner(["Gryffindor", "Slytherin", "Slytherin"])); // "Slytherin Juara Futsal Hogwarts 2018"
console.log(whosTheWinner(["Gryffindor", "Gryffindor", "Slytherin", "Slytherin", "Gryffindor"])); // "Gryffindor Juara Futsal Hogwarts 2018"
console.log(whosTheWinner(["Gryffindor", "Slytherin"])); // "Draw, pertandingan akan dilanjutkan dengan penalty kick!"
console.log(whosTheWinner([])); // "Draw, pertandingan akan dilanjutkan dengan penalty kick!"
console.log(whosTheWinner(["Slytherin"])); // "Slytherin Juara Futsal Hogwarts 2018"
