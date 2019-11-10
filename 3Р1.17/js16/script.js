let vaz = {
	wheelCount: 6,
	country: "Russian Federation",
	year: 1978,
	hp: 64,
	steering: "left",
	color: "#abc",
	distance: 160003,
	getDistacePerYear: function(year) {
		let age = year - this.year;
		let distancePerYear = this.distance / age;
		return Math.round(distancePerYear);
		// return Math.round(this.distance / (year - this.year));
	},
	getDistancePerDay: function(year) {
		return this.getDistacePerYear(year) / 365;
	}
};


vaz.color = "#a0a";

/*
	distancePerYear = ?
	distancePerDay = ?
*/

// function getDistacePerYear() {
// 	// let nowYear = 2019;
// 	// let age = nowYear - vaz.year;
// 	// let distancePerYear = vaz.distance / age;
// 	// return Math.round(distansePerYear);
// 	return Math.round(vaz.distance / (2019 - vaz.year));
// };

// console.log(getDistacePerYear());

console.log(vaz.getDistacePerYear(1999));
console.log(vaz.getDistancePerDay(2017));


// Создать объект user со свойством name.
// Создать метод say(), с переданным словом, который выводит фразу

// Например:
// Слово = Я люблю JavaScript
// Имя = Петя

// Петя сказал: Я люблю JavaScript
 

let user = {
	name: "Someone",
	say: function(phrase, name) {
		if (name) {
			this.name = name;
		}
		return this.name + " says " + phrase;
	}
}

console.log(user.say("\"I am bad developer\""));
console.log(user.say("\"I am the best developer in the World\"", "Vlad"));


let arr = [];

let myArray = [
	1, 
	"Vasya", 
	true, 
	"Зеленый", 
	{width: 10, height: 20}
];

console.log(myArray.indexOf(true));
console.log(myArray[6]);
myArray[100] = 45;
myArray[40] = "Omnomnom";
console.log(myArray[6]);
console.log(myArray.length);

/* Отобразить все слова */
for (let i = 0; i < myArray.length; i++) {
	if (typeof myArray[i] === "string") {
		console.log(myArray[i]);
	}
}

let figures = [
	{width: 10, height: 15},
	{width: 15, height: 15},
	{width: 10, height: 8},
	{width: 34, height: 11},
	{width: 40, height: 4},
	{width: 6, height: 6},
	{width: 10, height: 9},
	{width: 10, height: 10},
	{width: 12, height: 15},
	{width: 10, height: 12},
];

let rect = {
	h: 0,
	w: 0,
	S: function() {
		return this.h * this.w;
	},
	P: function() {
		return (this.h + this.w) * 2;
	},
	D: function() {
		return Math.sqrt(Math.pow(this.h, 2) + Math.pow(this.w, 2));
	},
	isSquare: function() {
		return !!(this.h === this.w);
	},
	getString: function() {
		let str = "";
		/*
			Дан прямоугольник со сторонами hxw, периметром = x, площадью = y и диагональю = z
		*/
		if (this.isSquare()) {
			str += "Дан квадрат со стороной " + this.h + ". ";
		} else {
			str += "Дан прямоугольник " + this.h + "x" + this.w + ". ";
		}
		str += "P = " + this.P() + ". ";
		str += "S = " + this.S() + ". ";
		str += "D = " + this.D() + ". ";
		return str;
	}
}

// console.log(rect.getString());


for (let i = 0; i < figures.length; i++) {
	rect.w = figures[i].width;
	rect.h = figures[i].height;
	console.log(rect.getString());
}











