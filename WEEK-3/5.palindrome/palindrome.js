function palindrome(kata) {
  var kataSplit = kata.split('');

  for (var i = 0; i <= kata.length; i++) {
    if (kataSplit === kataSplit.reverse()) {
      return true
    }else {
      return false
    }
  }
}
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
