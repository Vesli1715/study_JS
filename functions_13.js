//function declaration statments
function greet(name) {
	return "hello " + name;
}
console.log(greet('Bob').toUpperCase());


//function defination expression
var hello = function(name){
	return 'Hi ' + name;
}; // має бути ;

console.log(hello('John'));
//при передачі аргуметів якщо їх замало або забагато помилки це не викличе


var hello = function(name){
	console.log(arguments[2]);		//показує передані аргументи як масив
	console.log(arguments.length);
	return 'Hi ' + name;
}; // має бути ;
console.log(hello('John','one','two'));


//self invoking anonynous function
// змінна greeting приймає результат виконання функції з заданим аргументом
var greeting = function(name) {
	return "hello " + name;
}("BOB");

console.log(greeting);