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
function func3() {
	var sel = document.getElementById('mySelect').selectedIndex;
	var options = document.getElementById('mySelect').options;
	console.log('Ви вибрали  ' + options[sel].text);
}

function func4() {
	var rng = document.getElementById('r1');
	var p = document.getElementById('one');
	document.body.appendChild(p);
	p.innerHTML = 'price is '+ rng.value;
	console.log(rng.value);
}
