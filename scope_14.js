// область видимості глобальна і локальна
// завжди використовувати var при оголшенні змінної в локальних областях видимості
var i = 5;

//function scope
var func = function() {
	var i = 10;
	console.log(i);
};
func(); // -> 10
console.log(' ')

// вкладені функції створюють лянцюжки областей видимості scope chain
var func = function() {
	var i = 10;
	console.log(i);
	var otherFunc = function() {
		var i = 15;
		console.log(i);
	};
	otherFunc() //->15	
};
func(); // -> 10
// спочатку виведе 10 потім 15
console.log(' ')


var func = function() {
	var i = 10;
	console.log(i);
	var otherFunc = function() {
		//var i = 15;  				якщо в вкладеній немає такої зміної викристовується інший арг вище
		console.log(i);
	};
	otherFunc() //->15	
};
func(); // -> 10


var func = function() {
	var i = 10;
	console.log(i);
	var otherFunc = function() {
		console.log(i); // виклик до обявлення поверне undefined а не значення з іншої функції
		var i = 15;
	};
	otherFunc() //->15	
};
func(); // -> 10