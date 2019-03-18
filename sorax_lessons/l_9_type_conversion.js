//перетворення в числа
Number('555');       //number
console.log(+"555"); //number
parseInt('23 px',10) 	//number аргумент система чисел симвли ігноруються
parseFloat('3.14 pi', 10) //number аргумент система чисел симвли ігноруються


//перетворення в строку
String(444);			//string
console.log(444 + "");	//string

var n = 444;
n.toString(); 			//string аргументм можна задати систему числення 

Boolean(1);				//boolean
console.log(!!1);		//boolean
console.log(!!0);		//boolean
//перетворення 0, NaN, null, undefined в будеве поверне false 

console.log(5 +'5');		// 55 string
console.log('5' * '4');		// 20 number
console.log('5' * 'words'); // NaN

// для порівнянь використовувати завжди ===
console.log("5" == 5); 		//true
console.log("0" == false);  //true
console.log(0 == false);    // true
console.log("5" == true);   // false
console.log("" == false);   // true


// null i undefined порівнюються тільки самі з собою
console.log(null == false);      //false
console.log(null == true);       //false
console.log(undefined == false); //false
console.log(undefined == true);	 //false
console.log(undefined == null);  //true
console.log(0 === null);

