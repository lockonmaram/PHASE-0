function konversiMenit(detik) {
	var minute = detik / 60;
	var second = detik - (Math.floor(minute)*60);

	if (second < 10) {
		return Math.floor(minute)+':0'+second
	}else {
		return Math.floor(minute)+':'+second
	}	
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
