// let cook = "";
// // cook = cook + "..."
// cook += "Включаем плиту. ";
// cook += "Ставим сковородку на плиту. ";
// cook += "Берём 2 яйца. ";
// cook += "Разбиваем яйца в сковородку. ";
// cook += "Добавить соль/перец. ";
// cook += "Ждать 5 минут.\n";
// cook += "Яичница из двух яиц готова!"
// console.log(cook);

// cook = "";
// cook += "Включаем плиту. ";
// cook += "Ставим сковородку на плиту. ";
// cook += "Берём 2 яйца. ";
// cook += "Разбиваем яйца в сковородку. ";
// cook += "Добавить соль/перец. ";
// cook += "Ждать 5 минут.\n";
// cook += "Яичница из двух яиц готова!"
// console.log(cook);


function cookEggs(eggsCount = 2, tomato = false, bakon = false) {
	let cook = "";
	// cook = cook + "..."
	cook += "Включаем плиту. ";
	cook += "Ставим сковородку на плиту. ";
	cook += "Берём " + eggsCount + " яйца. ";
	cook += "Разбиваем яйца в сковородку. ";
	if (bakon) {
		cook += "Добавить бекон. ";
	}
	if (tomato) {
		cook += "Добавить помидорчиков. ";
	}
	cook += "Добавить соль/перец. ";
	cook += "Ждать 5 минут.\n";
	cook += "Яичница из " + eggsCount + " яиц ";
	if (bakon && tomato) {
		cook += "с беконом и помидорчиками ";
	} else if (tomato) {
		cook += "с помидорчиками ";
	} else if (bakon) {
		cook += "с беконом ";
	}
	cook += "готова!";
	return cook;
}

// false => 0, "", undefined, null

// let hungryMen = 4;
// while (hungryMen) {
// 	cookEggs();
// 	hungryMen = hungryMen - 1;
// }

let result1 = cookEggs(2,true);
let result2 = cookEggs();
let result3 = cookEggs(1,false,true);
let result4 = cookEggs(10,true,true);

console.log(result1, result2, result3, result4);
console.log(cookEggs());


