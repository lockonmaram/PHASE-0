var flag = null;

//pertambahan 1
for (flag = 1; flag <= 100; flag++) {
	if (flag % 2 !== 0) {
		console.log('GANJIL');
	}else if (flag % 2 === 0) {
		console.log('GENAP');
	}
}
console.log('');

//pertambahan 2 kelipatan 3
for (flag = 1; flag <= 100; flag += 2) {
	if (flag % 3 === 0) {
		console.log(flag + (' KELIPATAN 3'))
	}
}
console.log('');

//pertambahan 5
for (flag = 1; flag <= 100; flag += 5) {
	if (flag % 6 === 0) {
		console.log(flag + ' KELIPATAN 6');
	}
}
console.log('');

//pertambahan 9
for (flag = 1; flag <= 100; flag += 9) {
	if (flag % 10 === 0) {
		console.log(flag + ' KELIPATAN 10');
	}
}
console.log('');
