console.log("hello");
console.log('world');

console.log("some 'new' text");
console.log('other "text"');

console.log("hello world".length);
console.log('one \
	two \nthree \tfour \"five \\'); // після \ немає бути абсолютно нічого 

// методи строк

var string = "Some new information for studing";
console.log(' ');
console.log(string.length);
console.log(string.charAt(0)); //first index
console.log(string.charAt(string.length -1)); //last index
console.log(string.substring(9));
console.log(string.substring(9,19));
console.log(string.slice(4));  // start index 4
console.log(string.slice(-11)); // start index -11
console.log(string.substr(9)); // first 9 index to end
console.log(string.substr(0, 9));
console.log(string.indexOf("me"));
console.log(string.lastIndexOf('st')); // searching from end
console.log(string.split(" "));
console.log(string.toUpperCase());
console.log(string.toLowerCase());
console.log(' ');

// в новім JS використвуються доступ по індексу як в масивах
console.log(string[0]) // !!!! не працює зріз і -1...