let numbers = [2, 10, 4, 5, 2, 0, 5];

// numbers[8] = 8;
// console.log(numbers);
// Добавить значение в конец массива
numbers.push(7);
console.log(numbers);
numbers.push(3);
console.log(numbers);

// Забрать значение из конца массива
let n = numbers.pop();
console.log(numbers, n);

// Забрать значение из начала массива
let m = numbers.shift();

// Добавить значение в начало массива
numbers.unshift(n);

numbers.push(m);
console.log(numbers, numbers.length);

