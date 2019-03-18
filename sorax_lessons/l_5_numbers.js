console.log(5);
console.log(0);
console.log(1.23);
console.log(.23);
console.log(12e4); // -> 120000


var n = 5000,
	N = new Number(6000);
//.toFixed працює з обєктами типа object і простими типами
console.log(n.toFixed(2)); //-> 5000.00
console.log(N.toFixed(2)); //-> 6000.00
console.log(3 .toFixed(2)); //-> 3.000
//.toFixed() .toExponential() .toPercision()


//унарні оператори 
//+10
//-10
// перефіксні/постфіксні інкремент/декремент
var i = 10;
console.log(++i);// спочатку додає 1 потім показує
i = 10; console.log(i++);// спочатку показує потім додає 1
i = 10; console.log(--i); // спочатку -1
i = 10; console.log(i--); // потім -1


//бінарні оператори
// +, -, *, /, %
var n = 100;
n = n + 20;
n += 20;// ->140
n *= 2;
n /= 2;


//прівняння 
console.log('');
console.log(5>10);
console.log(5<=10);
console.log(10 === 10);
console.log(10 !== 10);
console.log(10 == '10'); //true не використвується
console.log(10 === '10'); //false

//Math
console.log('');
console.log(Math.sqrt(25));
console.log(Math.pow(2,4));
console.log(Math.PI);
console.log(Math.E);
console.log(0/0);

// 5 / 0 не викл помилки а значення  infinity
//числовий ти infinity,-infinity безкіненість
// 0 / 0 поверне NaN (not a number)
console.log(NaN === NaN); //->false ???

// похибки при обчисленні 
console.log(0.2 + 0.1);


