// this, call, apply , bind

var greet = function(arg){
	return arg + ' my name is '+ this.name;
}

var person = {
	name: 'Bob',
	greet: greet
}

var anotherPerson = {
	name : "John",
	greet : greet
}

console.log(person.greet());
console.log(anotherPerson.greet('hi!'));

console.log(anotherPerson.greet.call(person, "hello!"));        	 // call перший аргумент вказує об'єкт на який має ссилатись this
console.log(anotherPerson.greet.call(anotherPerson, "hello!"));		 // другий аргумент це значення яке передається в функцію

console.log(anotherPerson.greet.apply(anotherPerson, ["hello!"]));	 // все теж як і call тільки аргументи передаються як масив

var bound = greet.bind(anotherPerson);// bind зв'язує функцію з об'єктом
console.log(bound('hello world!!! '))