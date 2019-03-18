// конструктори створюються за допомогою ключового слова new

var Person;

Person = function(name){ //схоже на створення функції тільки з вел букви назва і this
	this.name = name;
}

jack = new Person('JACK'); //створення екземпляра класса або об'єкта
console.log(jack.name);

Gary = new Person('GARY');
console.log(Gary.name);

console.log(jack instanceof Person);