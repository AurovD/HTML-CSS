/*
	Типы данных:
	- number 
		1 67 98 05
		4777.5789
		NaN
		Infinity
		-Infinity
		- operators
			+
			-
			/
			*
			%
	- string
		"Hello World"
		'Hello World'
		`Hello World`
		'78..09'
		"Hello \u01e3 \n\t\"world!\""
		- operators
			+ (конкатенация - сложение строк)
	- boolean
		true
		false (0, "", null, undefined)

		- operators
			>
			<
			>=
			<=
			==
			!=
			===
			!==
			! (!true = false)
			&& (умножение - true && true -> true)
			|| (сложение - true || false -> true)
	- null
	- undefined
*/


typeof 1234    // "number"
typeof "hello" // "string"
typeof NaN     // "number"

document.write("Hello JavaScript!");
// alert("Тут что-то пошло не так");
console.log("JavaScript forever!");

let name = "Александра";
let lang = "JavaScript";
name = "Vasya";
console.log(name + " \u2764 " + lang);
name = "Nikita";
console.log(name + " \u2764 " + lang);

const PI = 3.14;
// PI = 40;


let x = 10;

while (x) {
	console.log(x + ": Я \u2764 " + lang);
	x = x - 2; /* x -= 2 */
}
console.log(0 + ": Я больше не \u2764 " + lang);

let myCode = "<div style='background:red;'>";
let number = 0;
while (number <= 10) {
	// myCode = myCode + "<div>8 * " + number + " = " + 8 * number + "</div>";
	myCode += `<div>8 * ${number} = ${8 * number}</div>`;
	number++; // number = number + 1;
}
myCode = myCode + "</div>"
// console.log(myCode);
// document.write(myCode);

/*
	Задача 1:
		Нарисовать прямоугольный треугольник из "*" в зависимости от указанного числа строк;
		
		например, lines = 6:

		*
		**
		***
		****
		*****
		******

	Задача 2:
		Нарисовать равнобедренный треугольник из "*"

		    *
		   ***
		  *****
		 *******
		*********

	Разбор задачи 1:
		n = 6;

		str = "*"      n = 6
		str = "**"     n = 5
		str = "***"    n = 4
		str = "****"   n = 3
		str = "*****"  n = 2
		str = "******" n = 1
*/

// Решение задачи 1:
let lines, symbol, log;
lines = 10;
symbol = "\u2764";
log = "";

// let lines = 10, symbol = "\u2764", log = "";

while (lines) {
	log += symbol;
	console.log(log);
	lines--;
}



for (let lines = 3, symbol = "^", log = ""; lines; lines--) {
	log += symbol;
	console.log(log);
}


lines = 3; //+prompt("Choose number unitl 10", "3");
symbol = "^"; //prompt("Choose symbol", "\u2764");

for (let log = ""; lines; lines--) {
	log += symbol;
	console.log(log);
}

/* 
	Задание 3:
		Возвести одно число в степень другого числа
	Разбор задания 3:
		n1 = 5
		n2 = 3

		5^1 = 5
		5^2 = 5*5
		5^3 = 5*5*5
*/

let n = 5;
let step = 7;
let result = 1;
let str = `${n}^${step}=`;

for (let i = 0; i < step; i++) {
	result = result * n;
}

// while (step) {
// 	result = result * n;
// 	step--;
// }

str += result;

console.log(str);


let person = prompt("What is your name?", "Oleg"); //"Oleg";


if (person === "Oleg") {
	console.log("Привет, Олег!");
} else if (person === "Leksa") {
	console.log(person + " \u2764 " + lang);
} else {
	console.log("Ты не Олег!");
}

/*
	Задача 4:
	Вывести в консоль фразу 
	"На ветке сидело (n) ворон"

	В зависимости от количества ворон (n), правильно писать окончания слов;
	n - вводить с клавиатуры.


	ворон 	5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
	ворона	1, 21, ... 91, 191
	вороны	2, 3, 4, 22, 23, 24, ... 92, 93, 94 


	n%10 === 1 
	n%100 !== 11
*/

let count = +prompt("Выберите количество ворон", 7);
let verb = "сидел";
let noun = "ворон";
let frase = ""

if (!isNaN(count)) {
	if (count%10 === 1 && count%100 !== 11) {
		verb += "а";
		noun += "а";
	} else if (
		(count%10 === 2 && count%100 !== 12) || 
		(count%10 === 3 && count%100 !== 13) || 
		(count%10 === 4 && count%100 !== 14)
	) {
		verb += "и";
		noun += "ы";
	} else {
		verb += "о";
	}
}
frase = `На ветке ${verb} ${count} ${noun}`;

console.log(frase);