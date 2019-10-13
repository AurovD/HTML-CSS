function mode(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10) {
     let numbers = {

     }; 
    let arr = [n1, n2, n3, n4, n5, n6, n7, n8, n9, n10];
    let num = [];
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for(let j = 0; j < arr.length; j++) {
            if(arr[i] !== arr[j]) {
            }
            if(arr[i] === arr[j]) {
                count++;
            }
        }
        numbers[arr[i]] = count;
    }
    let max = -Infinity, x;
    for( x in numbers) {
        if( numbers[x] > max) max = numbers[x];
    }
    for (let k in numbers) {
        if(numbers[k] === max) num.push(k);
    }

     return [num];
}

console.log(mode(5,5,5,5,3,5,3,3,3,3));