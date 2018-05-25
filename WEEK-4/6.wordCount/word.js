function hitungHuruf(kata) {
  var results = [];
  var arr = kata.split(" ");
  var count = 0;

    for (var i = 0; i < arr.length; i++) {
        var word = arr[i];
        var count2 = 0;
      for (var a = 0; a < word.length; a++) {
          var countLetter = 0;
          var letter = word[a];
          for (var b = a + 1; b < word.length; b++) {
              var nextLetter = word[b];
              if (letter === nextLetter) {
                  countLetter += 1;
              }
          }
          if (countLetter > count2) {
              count2 = countLetter;
            }
          }
      if (count2 > count) {
          results = [];
        }
        if (count2 >= count) {
          count = count2;
          results.push(arr[i]);
        }
   }
    return results[0];
}


// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau
