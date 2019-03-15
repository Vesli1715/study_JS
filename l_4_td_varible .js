// прості тд об'єкти immuptable
var myNumber = 345,
	myString = "some string",
	myBool = true,
	myNull = null,
	myUndef = undefined;

console.log(typeof myNumber);
console.log(typeof myString);
console.log(typeof myBool);
console.log(typeof myNull); // null -> object ?!?!
console.log(typeof myUndef); // -> undefinded

console.log(myString.toUpperCase());
console.log(myString); //всеодно нижній регістр


// складні тд об'єкти , mutable
var obj = {name:'Sorax'},
	array =[1,2,3],
	regexp = /w+/g,
	func = function(){};

console.log(typeof obj); //->object
console.log(typeof array); //->object
console.log(typeof regexp); //->object
console.log(typeof func); //->func

obj.name = 'Xorax';
array[1] = 123;


// множинне присвоєння
var a,b,c,d;
a = b = c = d = 5;