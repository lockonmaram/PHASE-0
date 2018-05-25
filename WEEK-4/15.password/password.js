function changeVocals (str) {
  var arr = str.split('');
  var char;
  var ascii;
  var str2 = '';

  for (var i = 0; i < arr.length; i++) {
    char = arr[i];
    ascii = str.charCodeAt(i);
    if (ascii === 65 || ascii === 69 || ascii === 73 || ascii === 79 || ascii === 85
      || ascii === 97 || ascii === 101 || ascii === 105 || ascii === 111 || ascii === 117 ) {
      char = String.fromCharCode(ascii + 1);
      str2 += char;
    }else {
      str2 += char;
    }
  }
  return str2;
}

function reverseWord (str) {
  var splitStr = str.split('');
  var reverseArray = splitStr.reverse();
  var joinArray = reverseArray.join('');
  return joinArray;
}

function setLowerUpperCase (str) {
  var str2 = '';
  for (var i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      str2 += str[i].toLowerCase();
    }else {
      str2 += str[i].toUpperCase();
    }
  }
  return str2;
}

function removeSpaces (str) {
  var noSpace = str.replace(' ', '');
  return noSpace;
}

function passwordGenerator (name) {
  var vocal = changeVocals(name);
  var reverse = reverseWord(vocal);
  var upLow = setLowerUpperCase(reverse);
  var password = removeSpaces(upLow);

  if (name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter';
  }else {
    return password;
  }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
