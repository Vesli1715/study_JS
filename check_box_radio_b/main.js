function func1() {
var check;
check = document.getElementById('one');

if (check.checked) {
	console.log('true');
}
else {
	console.log('false');
}
}
function func2() {
	var rad = document.getElementsByName('r1'); // масив radiobutton
	for ( var i = 0; i < rad.length; i++ ) {
		if (rad[i].checked) {
			console.log('answer is ' + i );
		}
	}
}
