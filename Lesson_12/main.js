//первая
let degree = 1/(1+(1/(2+(1/(3+(1/4))))));
console.log(degree);

//вторая
let number = prompt(`Напишите шестнадцатриричный код`);
let l = number.length;
let check = false;
let count = 0;
console.log(l);
for (let index = 0; index < l; index++) {
    let word = number.charAt(index);
     if (word <= `0` || word <= `9` || word.toLowerCase === `A`.toLowerCase || word === `B` || word === `C` || word === `D` || word.toLowerCase === `E`.toLowerCase || word === `F` ) {
         check = true;
         console.log(check);
            if (check === true) {
                count += 1;
            }
     } else {
         console.log(`Это не HEX`);
         check = false;
     }
}
if (count === l) {
    console.log(`Это HEX`);
}

//ТРЕТЬЯ
let table = "<table style='border-style: solid; border-collapse: collapse; color: #000; text-align: center;'>";
let tr = "<tr>"
let td = "<td style='border-style: solid; border-collapse: collapse; color: #000; text-align: center;"
let tdEnd = "</td>";
let trEnd = "</tr>";
let tablEnd = "</table>";
let ten = 10;
let random = 1;
let write = "";
write += table;
for (let i = 0; i < ten; i++) {
    write += tr;
    for (let ind = 0; ind < ten; ind++) {
        let cell;
        random = Math.floor(Math.random() *100 + 1); 
            if (random >= 50) {
                cell = td + " background: #f00;'>"+ random + tdEnd;
            } else {
                cell = td + "'>" + random + tdEnd;
            }
        write +=cell;
        console.log(ind, cell);
    }
}

//num = 0;
//while (num <= 10) {
////    code = code + "<div>8 * " + num + " = " + 8 * num + "</div>";
//    code += `<div>8 * ${num}  = ${8 * num} </div>`;
//    num = num + 1;
//    //number++
//}
write += trEnd;
write += tablEnd;
document.write(write)

//ЧЕТВЕРТАЯ
let numbers = 50;
for (let i = 0; i < numbers; i++) {
    console.log(i);
    if ( (i % 3) === 0 && (i % 5) === 0) {
        console.log(`omg`);
    } else if ((i % 3) === 0) {
        console.log(`la`);
    } else if ((i % 5) === 0) {
        console.log(`tu`);
    }     
}



//ПЯТАЯ
let n = prompt(`Введите десятичное число`);
let bin = "";
let deg = 0;
while (deg !== 1) {
    if ((n % 2) === 1) {
        bin += `1`;
    } else {
        bin += `0`;
    }
deg = Math.floor(n / 2);
n = deg;
}
if (deg === 1) {
        bin += `1`;
}
let lan = bin.length;
    let nbin = ``;
for (let index = lan; index >= 0; index--) {
    nbin = nbin + bin.charAt(index);
}
console.log(`NBIN: ${nbin}`);

n = prompt(`Введите десятичное число`);
let hex = "";
let gree;
while (n !== 0) {
    /* switch(n) {
        case n % 16 === 15:
            hex += `F`;
        case n % 16 === 14:
            hex += `E`;
        case n % 16 === 13:
            hex += `D`;
        case n % 16 === 12:
            hex += `C`;
        case n % 16 === 11:
            hex += `B`;
        case n % 16 === 10:
            hex += `A`;
        default:
            gree = n % 16;
            hex += gree;
    } */
    if (n % 16 === 15) {
        hex += `F`;
    } else if (n % 16 === 14) {
        hex += `E`;       
    } else if (n % 16 === 13) {
        hex += `D`;      
    } else if (n % 16 === 12) {
        hex += `C`;
    } else if (n % 16 === 11) {
        hex += `B`;
    } else if (n % 16 === 10) {
        hex += `A`;       
    } else {
        gree = n % 16;
        hex += gree;
    }
    n = Math.floor(n / 16);
}

lan = hex.length;
    let nhex = ``;
for (let index = lan; index >= 0; index--) {
    nhex = nhex + hex.charAt(index);
}
console.log(`NHEX: ${nhex}`);


//ШЕСТАЯ
let apple = prompt(`Сколько яблок`);
let orange = prompt(`Сколько апельcинов`);

let appleWeight = 100 * apple;
let orangeWeight = 150 * orange;

if (appleWeight > orange * orangeWeight) {
    console.log(appleWeight);
    console.log(`Яблоки весят больше`);
} else {
    console.log(orangeWeight);
    console.log(`Апельсины весят больше`);
}





