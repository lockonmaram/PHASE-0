function balikString(str) {
  var huruf = str.split('');
  var reversedString = '';

  for (var i = huruf.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }
    return reversedString;
}
console.log(balikString('hello world!'));
