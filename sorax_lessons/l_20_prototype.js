var Person = {
	constructor: function (name, age, gender){
		this.name = name;
		this.age = age;
		this.gender = gender;
		return this;
	},
	greet: function() {
		console.log('hello ' + this.name);
	}
};

var person , secondPerson, thirdPerson;

person = Object.create(Person).constructor('John', 20, 'male');
secondPerson = Object.create(Person).constructor('Jana', 22, 'female');
thirdPerson = Object.create(Person).constructor('Gary', 30, 'male');

console.log(person.name);
console.log(secondPerson.gender);

console.log(thirdPerson.greet());

console.log(Person.isPrototypeOf(person));// Person є прототипом для person


// Наслідування прототипа
var Developer = Object.create(Person);
Developer.constructor = function(name, age, gender, skills) {
	Person.constructor.apply(this ,arguments);
	this.skills = skills || [];
	return this;
};
Developer.develop = function(){
	console.log('working...');
}

var developer = Object.create(Developer).constructor('Paul', 36 , 'male', 'JS, python');

console.log(developer.skills);
console.log(developer.develop());
