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

console.log(changeVocals('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(changeVocals('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(changeVocals('Alexei')); // 'JFXFLb'
console.log(changeVocals('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
