// обєкт - це набір властивостей імя:знаення
//об'єктний літерал
var person = {
	name: 'Bob',
	age: 20,
	gender: 'male',
	sayHi: function(name) {
		return 'hello ' + name;
	}
}
console.log(person.name);
console.log(person['name']);

person.age = 25;			//	зміна значення властивості name
person.job = 'developer';	//	нова вмастивість з знаенням

console.log(person.age);
console.log(person.job);
console.log(person.sayHi(person.name));
console.log(person);
console.log('');


//ше один варіант створення обєкта
var object = new Object();
object.property = 'some value';
console.log(object.property);
console.log('')


// ше варіант з наслідуванням властивостей типа
var obj = Object.create({x: 10, y: 10});
obj.x = 20;
console.log(obj);// ?? тільки 20 а мало б ше 10,10

delete person.age
// console.log(persone.age); 	// error
// console.log('age' in person); 	// false
// console.log('name' in person); 	// true
