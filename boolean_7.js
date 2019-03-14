// true false

console.log(1 === 1);
console.log(1 === 2);

console.log(Boolean(5));

// always false

console.log('');
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(""));

console.log('');

var s = "text";
if (s) {
	console.log('its true');
}

console.log(true && false); // and -> false  
console.log(true && true); // and -> true   і той і той true
console.log(true || false);// OR -> true    хочаб один true
console.log(false || false);// OR -> false
console.log(!true)  // -> false
console.log(!false)

// умовний оперфтор за допомгою && ( true and true =>true. someting else return false)
var a = 0,
	isTrue = false;
isTrue && (a = 0); // для присвоєння а=5 переше знаяення має бути true
console.log(a);

// умовний оперфтор за допомгою || (or хоча б одне true )
var someString = "";
var newSrting = someString || '' || "default text"; //повене перше значення true
console.log(newSrting)