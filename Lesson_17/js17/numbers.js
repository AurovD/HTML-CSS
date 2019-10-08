// console.log(foo1());
// console.log(foo());

let foo1 = function() {
    return "ololo";
};

function foo() {
    return "tralala";
}

let getRandom = function(n = 10) {
    return Math.floor(Math.random() * n);
};

getRandom();
console.log(getRandom());

/*
* Заполнить массив рандомным количеством рандомных значений
* Посчитать сумму всех значений массива
* */

let arr = [];

// LIFO / FIFO;

for (let i = 0; i < 1000; i++) {
    arr.push(getRandom(101));
}
console.log(arr.length, arr);

// Variant 1
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);

// Variant 2
sum = 0;
for (let i in arr) {
    sum += arr[i];
}
console.log(sum);

// Variant 3
sum = 0;
for (let val of arr) {
    sum += val;
}
console.log(sum);

// Variant 4
sum = 0;
arr.forEach(function(value) {
    sum += value;
});
console.log(sum);
