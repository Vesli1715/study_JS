//accessor -> getter/setter

var person = {
	name: 'Sorax',
	_age: 20,
	get age(){ //спрацьовує при виклику властивості age
		return this._age;
	},
	set age(value){ // спрацьовує при писвоєнні знаення властивості age
		this._age = value < 0 ? 0 : value > 122 ? 122 : value;
	}
};

person.age = 180;
console.log(person.age);

// Дескриптор
 