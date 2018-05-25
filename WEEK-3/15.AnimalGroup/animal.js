function groupAnimals(animals) {
  var hewan = [];
  var initials = [];
  var huruf = '';
  var huruf2 = "";
  var hurufCount = 0;
  var hurufPos = 0;
  var inspector;
  var inspector2;

  animals.sort();

  for (var i = 0; i < animals.length; i++) {
    inspector = animals[i][0];

    if (huruf !== inspector) {
      huruf = inspector;
      hurufCount++
    }
  }

  for(var j = 0; j <= hurufCount - 1; j++)  {
    initials[j] = [];
  }

 for (var k = 0; k <= animals.length - 1; k++) {
   inspector2 = animals[k][0];

   if (k === 0) {
     initials[hurufPos].push(animals[k]);
     huruf2 = inspector2;
   } else if (huruf2 !== inspector2) {
     hurufPos ++;
     initials[hurufPos].push(animals[k]);
     huruf2 = inspector2;
   } else if (huruf2 === inspector2) {
     initials[hurufPos].push(animals[k]);
   }
 }
 return initials;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
