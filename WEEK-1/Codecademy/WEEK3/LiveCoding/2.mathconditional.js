var name ='maram'; // silakan berikan nilai bebas
var age = 200; // silakan berikan nilai bebas
var money = 210000; // silakan berikan nilai bebas
var steak = 300000;

if (name === '') {
  console.log('Anda tidak boleh masuk!');
}
if (age >= 55) {
  steak -= 300000*30/100;
}
if (money < steak) {
    console.log('Uang tidak cukup. Anda harus pulang');
}else if (money >= steak){
  money -= steak;
  console.log('Anda bisa pesan steak. Sisa uang anda: ' + money);
}
