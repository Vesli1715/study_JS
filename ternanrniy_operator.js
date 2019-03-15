// тернарний(три умови) умовний оператор
// вираз 1 ? знаення 2 : значення 3
// якщо вираз 1 true тоді повертає значення 2, якщо вираз 1 false тоді поверне значення 3

var x = 15;
var text =     x > 10 ? 'larger than 10' : 'equal or lower than 10';
console.log(text); //  text присвоється заначення 'larger than 10' так як x>10 true


var x = 10;
var text =     x > 10 ? 'larger than 10' : x < 10 ? 'lower than 10': 'x equal 10';
console.log(text)


// майже те саме тільки з умовними констрекціями
var x =10;
if (x>10) {
	console.log('larger than 10');
} else if (x<10) {
	console.log('lower than 10');
} else if (x !== 10) {
	console.log('equal to 10');
} else {
	console.log('no result')
}