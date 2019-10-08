// литерал
// let n = 4;
// let name = "Vasya";
// let teachVlad = false;
let capitals = {
	"Российская Федерация": "Moscow",
	"UK": "London",
	France: "Paris",
	"China": "Beijing",
	"Armenia": "Yerevan"
};

let rus = "Российская Федерация";

capitals.Germany = "Berlin";
// capitals["Российская Федерация"] = "Balashicha";
capitals[rus] = "Балашиха";


function createTable(obj) {
    let table = "<table>";
    for (let key in obj) {
        // console.log(key);
        // console.log(capitals[key]);
        table += `<tr>
                <td style="border: solid">${key}</td>
                <td style="border: solid">${obj[key]}</td>
              </tr>`;
    }
    table += "</table><br><br>";
    return table;
}

document.write(createTable(capitals));

let auto = {
    Russia: "VAZ 2109",
    UK: "Bentley",
    France: "Renault",
    China: "Cherry",
    Armenia: "Eraz",
    Japan: "Mazda"
};

document.write(createTable(auto));

let book1 = {
    author: "D. Flanagan",
    title: "Learn JavaScript. 6th edition",
    year: 2012,
    pagesCount: 1080,
    price: 1500,
    available: true
};

let book2 = {
    author: "Франц Кафка",
    title: "Школьный учитель",
    year: 1915,
    pagesCount: 578,
    price: 248,
    available: false
};

/*
    Дано 2 книги
    В кармане - 1000 руб.
    Купить самую дорогую возможную книгу или все, если получится
*/

let money = 1200;

function tryToBuy(book) {
    if (book.price <= money) {
        console.log("Я купил(а) книгу " + book.title);
        money = money - book.price;
    }
}

function buyBooks(b1, b2) {
    // if (b1.price <= money) {
    //     console.log("Я купил(а) книгу " + b1.title);
    //     money = money - b1.price;
    // }
    // if (b2.price <= money) {
    //     console.log("Я купил(а) книгу " + b2.title);
    //     money = money - b2.price;
    // }
    tryToBuy(b1);
    tryToBuy(b2);
    console.log("У меня осталось " + money + " руб.")
}


if (book1.price >= book2.price) {
    buyBooks(book1, book2);
} else if (book2.price > book1.price) {
    buyBooks(book2, book1);
}

/*
* Создать еще 2-3 объекта с книгами.
* Решить вышестоящую задачу для 5 книг с учетом наличия книг в магазине
*
* 1500
*
* 100
* 1000
* 200
* 400
* 1200
* */


/*
    ДЗ

    Создайте объект msgs со следующими парами "ключ: значение:"
    young: "Вам еще рано работать"
    work: "Вам еще работать и работать"
    old: "Вам пора на пенсию"
    err: "Неизвестный возраст"
    Создайте переменную age с указанием возраста
    В зависимости от значения возраста (<17, 17-59, >59, другое) выводить сообщение, используя объект msgs

* */







