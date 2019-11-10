function getNumber(n) {
    return Math.floor(Math.random() * n);
}

let numbers = [];
let i = 0;
while (i <= getNumber(100)) {
    numbers.push(getNumber(11));
    i++;
}

console.log(numbers);

function mode(numbers) {
    let hash = {

    };
    let numbers_ress = [];
    for (let i = 0; i < numbers.length; i++) {
        // let count = 0;
        // for (let j = 0; j < numbers.length; j++) {
        //     if (numbers[i] !== numbers[j]) {
        //
        //     }
        //     if (numbers[i] === numbers[j]) {
        //         count++;
        //     }
        //
        // }
        if (!hash[numbers[i]]) {
            hash[numbers[i]] = 1;
        } else {
            hash[numbers[i]]++;
        }
    }

    let max = -Infinity, x;
    for( x in hash) {
        if( hash[x] > max) max = hash[x];
    }

    for (let k in hash) {
        if (hash[k] === max) {
            numbers_ress.push(+k);
        }
    }

    return numbers_ress;
}

console.log(mode(numbers));
