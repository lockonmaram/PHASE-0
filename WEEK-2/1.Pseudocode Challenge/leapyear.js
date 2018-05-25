var year = 2401;

if (year % 4 === 0) {
	if (year % 100 === 0) {
		if (year % 400 === 0) {
			console.log('it\'s a leap year!');
		}else {
			console.log('it\'s not a leap year :(');
		}
	}else {
		console.log('it\'s a leap year!');
	}
}else {
	console.log('it\'s not a leap year :(');
}