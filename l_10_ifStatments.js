
if (true) console.log('true');

if (false) 
	console.log('some');		// невиконається 
	console.log('some else');   // викнається бо не налкжть до конструкції тому використоують {}

if (true) { 
	console.log('one');		//спрацює 
	console.log('two'); 	//спрацює 
}

var name = "Bob", homecity; 

if (name ==='John') {
	homecity = 'Kiyv';
} else if (name === 'Bob') {
	homecity = 'Lviv';
} else if (name === 'Gary') {
	homecity = "Odesa";
} else {
	console.log('no one is true');//непрацює else  спрацьовує тільки тоді коли всі (if/else if) === fasle
}
console.log(name + " from " + homecity);
console.log('end');
 

//стандартна поведінка дещо дивна, спрацюють потрібна інстр і всі інструкції нижче 
var n = 2, result;
switch (n) {
	case 1 : result = '1';
	case 2 : result = '2'; //true result = 2
	case 3 : result = '3'; //true result = 3
	case 4 : result = '4'; //true result = 4
	default: result ='no result'; //true result = 'no result'
}
console.log(result) 


// правильна кострукція switch
var n = 2, result;
switch (n) {
	case 1 : result = '1'; break;
	case 2 : result = '2'; break; //true result = 2
	case 3 : result = '3'; break;
	case 4 : result = '4'; break;
	default: result ='no result'; // якщо ніодин case не спрацює
}
console.log(result) 




