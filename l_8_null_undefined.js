// null пусте значення 
// undefined відсутність любго значення
console.log(typeof null);  // ->object
console.log(typeof undefined); // ->undefined


// все це тип undefined -------------
var temp;
console.log(temp); // неініціалізована змінна

var obj = {};
console.log(obj.property); //неіснуюча властивість об'єкта

var a = [1,2,3];
console.log(a[4]); // неісн індекс

function greet(name) {
	return "hello " + name;
}
console.log(greet('world'));
console.log(greet()); //якщо функція очікує параметри а їх не передають

function f(arg) {}// без return функція повертає undefined

console.log(null == undefined); // true 
console.log(null === undefined); // false різні типи
