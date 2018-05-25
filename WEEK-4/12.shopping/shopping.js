function shoppingTime(memberId, money) {
  var output = {};
  var purchased = [];
  var obj = {
    'Sepatu Stacattu': 1500000,
    'Baju Zoro': 500000,
    'Baju H&N': 250000,
    'Sweater Uniklooh': 175000,
    'Casing Handphone': 50000,
  };

    if (memberId) {
      output['memberId'] = memberId;
    }else {
      return 'Mohon maaf, toko X hanya berlaku untuk member saja  '
    }
    if (money < 50000) {
      return 'Mohon maaf, uang tidak cukup';
    }else {
      output['money'] = money;
    }

    if (money >= 1500000) {
      purchased.push('Sepatu Stacattu');
      money -= 1500000;
    }
    if (money >= 500000) {
      purchased.push('Baju Zoro');
      money -= 500000;
    }
    if (money >= 250000) {
      purchased.push('Baju H&N');
      money -= 250000;
    }
    if (money >= 175000) {
      purchased.push('Sweater Uniklooh');
      money -= 175000;
    }
    if (money >= 50000) {
      purchased.push('Casing Handphone');
      money -= 50000;
    }

    output['listPurchased'] = purchased;
    output['changeMoney'] = money;

  return output;
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 175000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('asdfasdf', 9999999));
console.log(shoppingTime('qwerqwer', 1500000));
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
