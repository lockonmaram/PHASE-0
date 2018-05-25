var rows =5;
var string ='';

for (var i = 1; i <= rows; i++) {
	for (var j = 1; j <= i; j++) {
		string += '*';
	}
		console.log(string);
		string = '';
}
