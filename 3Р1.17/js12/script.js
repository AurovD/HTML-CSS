let name = "Александра";
let age = Math.floor(Math.random() * 100 + 1);//15; //+prompt(`${name}, сколько Вам лет?`, "18");
console.log(age);
if (age > 0 && !isNaN(age)) {
	if (age < 18) {
		console.log(`${name}, тебе еще рано работать!`);
	} else if (age > 59) {
		console.log(`${name}, Вам нужно много отдыхать!`);
	} else {
		console.log(`${name}, Вам еще работать и работать!`);
	}
} else {
	console.log(`${name}, ${age} - это не похоже на возраст!`);
}

let dayOfWeek = Math.floor(Math.random() * 7 + 1); //"Декабрь";

switch (dayOfWeek) {
	case 1:
		console.log("Сегодня - понедельник");
		break;
	case 2:
		console.log("Сегодня - вторник");
		break;
	case 3:
		console.log("Сегодня - среда");
		break;
	case 4:
		console.log("Сегодня - четверг");
		break;
	case 5:
		console.log("Сегодня - пятница");
		break;
	case 6:
		console.log("Сегодня - суббота");
		break;
	case 7:
		console.log("Сегодня - воскресенье");
		break;
	default:
		console.log(`Вы уверенны, что сегодня именно ${dayOfWeek}?`);
}


/* 

	Задача 1.
	Запросить у пользователя месяц рождения (числом)
	В зависимости от значения, при помощи switch вывести в консоль месяц рождения пользователя (строкой) или ошибку о неверном значении

*/

let n = 3.1089
n.toFixed(3) // -> "3.679" Возвращает строку и округляет значение до указанного количества символов после плавающей точки


/*
	Объект Math
	https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

// console.log(Math.E);

// n^3
let newNumber = Math.pow(n, 1/3);
// console.log(n, Math.pow(newNumber, 3));

// console.log(Math.round(n));
// console.log(Math.floor(n));
// console.log(Math.ceil(n));

let a = 128;
let b = 320;
let c = -4;

// console.log(Math.max(a,b,c));
// console.log(Math.min(a,b));


console.log(Math.random());

 /*

	Задача 2.
	Вывести в качестве значения переменных для дня недели и номера месяца рандомное число.



	Задача 3.
	Вывести в одной строке 100 случайных чисел от -999 до 999


*/

/*
	Задача 4
	Вывести в консоль сумму 100 случайных чисел от -999 до 999
*/

 // let randomNumber = Math.ceil(Math.random() * 1999 - 1000);

let summ = 0;
for (let i = 0, count = 100; i < count; i++) {
	let randomNumber = Math.floor(Math.random() * 1999 - 999);
	summ += randomNumber;
	// console.log(randomNumber, summ);
}
console.log(Math.abs(summ));



let word = prompt("Введите месяц");
if (word.toLowerCase() === "Сентябрь".toLowerCase() || word.toUpperCase() === "September".toUpperCase() || word == 9) {
	console.log("Брр, как холодно!");
}











	Задача 5.
	Дано 5 фигур.
	Дать возможность пользователю выбрать значение от 1 до 5 (в числовом или текстовом формате). Если пользователь выбрал не существующее значение, выбрать рандомное число от 1 до 5.

	В зависимости от выбранной фигуры, посчитать ее площадь:

	Фигуры:
	1) Квадрат (square) со строной h = 23
	2) Круг (circle) с диаметром d = 34
	3) Прямоугольник (rectangle) со сторонами h = 23, d = 34
	4) Треугольник (triangle) с основанием d = 34 и высотой h = 23
	5) Трапеция (trapezoid) с основанием d = 34, dm = 20, высотой h = 23;






