// throw (помилка); сторює помилку  

var calculate = function(n) {
	if (n>10) throw new Error('some error message'); // if  true викинути помилку
	return console.log(n + 10);
};

try {
	calculate(20);
} catch(e) {  								//e скороченно error
	console.log( 'new error -> '+ e.message);
}

// try {
// 	інструкція
// } catch (ідентифікатор) { виконується якщо б блоці try була помилка 
// 	інструкція
// } finally {				завжди викнується
// 	інструкція
// }

try {
	undef_var;
} catch(e) {  								//e скороченно error
	console.log( 'new error -> '+ e.message);
}