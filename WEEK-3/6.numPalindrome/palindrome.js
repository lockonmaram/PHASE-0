function angkaPalindrome(num) {

  while (num.toString() !== num.toString().split('').reverse().join('')) {
    num += 1
  }
  if (num < 9) {
    num += 1
  }
  return num

}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
