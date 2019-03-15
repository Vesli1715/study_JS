//
// for (ініціалізація(var i = 1); умова(true/false); інкремент/декремент) тіло цикла;

//for (;;); //сами простий цикл який нічоно не робить 
console.log('for')
var i;
for (i = 0; i<10; i++) { 
	console.log(i);  //0,1,2,3....9
}

for (i = 10; i--;) {
	console.log(i); // 9,8,7.....0
}
console.log('while')
var i = 0;
while (i<10) {
	console.log(i);
	i++;
}
var i = 10;
while (i--) {
	console.log(i);
}
console.log('do while')

//do (тіло цикла) while (умова(true/false)) за любої умови один раз споатку виконається тіло цикла тіло
var i = 0;
do console.log(i),i++; while(i>10)