/*
типы данных
number
    operators  + - * / %
        NaN - not a number - number
    typeof(NaN)
    Infinity - бесконечность
string
    "hello \"world\"" - экранирование
    конкатенация
boolean 
    > < >= <= != ==
0.3-0.2==0.1
false
0.09999999999999998

"5" === 5 /false оператор инициализации или строгое стравнение
"5" !== 5 /true
! (!true = false)
||(сложение - true||false -> true )
&&(умножение - true && true -> false)
false (0, "", null, undefined)

преобразование
"5" > 8 /false
"5"/2 /2.5
!!0 /false
!!1 /true
+"6586" 
6586
"7686"*1
false + "" /"false
686 + "" /"686"

все это тривиальные типы данных +
    undefined - отстуствие значения
    + object - не тривиальный тип

вывод инфромации:
*/
//document.write("<h2>last line</h2>");
//document.write("hgjgk");
////alert("hkhkhkf");
//console.log("   gfjfj");
//
//
//name = "jhygkg"; //можно переобъявить
//var name = "jkhl" 
//
//let x = "khlj"; //нельзя переобъявить
////let x = "jhkhhhl";
//console.log(name);
////console.log(x);

const pi = 3.14; //константа

//pi = 40;


 /*
 упрпвляющие конструкции
 
 while(a>b) {
    console.log(x);
 }
 
 while (x) console.log(x);
 
 */

//let code = "<div style='background:red;'>";
//num = 0;
//while (num <= 10) {
////    code = code + "<div>8 * " + num + " = " + 8 * num + "</div>";
//    code += `<div>8 * ${num}  = ${8 * num} </div>`;
//    num = num + 1;
//    //number++
//}
//code = code + "</div>"
//document.write(code);


/*
инкремент i += 1  i++
дискремент i -= 1   i--



    *
   ***
  *****
 *******
*********
*/




let star  = "*";
let count = 1;

//while (count <= 6) { 
//    console.log(star);
//count++;
//    star += "*";
//}


let slash = " ";

let lines = 15;
let hCount = lines-1;
while (lines) {
    console.log(slash.repeat(hCount)+star);
    lines--;
    hCount--;
    star += "**";
}





//for (let lines=3, symbol = "*", log = "";lines; lines--) {
//    log += symbol;
//    console.log(log);
//}



//lines = 3;//+prompt("jhkh"); //ввести
//symbol = prompt("*"); 
//for (let log = "";lines; lines--) {
//    log += symbol;
//    console.log(log);
//}



//let n = 5;
//let step = 3;
//let result = 1;
//let string = `${n}^${step}=`;
//
//for (let index = 0; index < step; index++) {
//    result = result * n;
//}
//console.log(`${n}^${step}=${result}`);
//
//let t = 1;
//while (step) {
//    t = t* n;
//    step--;
//}
//string = string + result;
//console.log(string);

//let person = prompt("name?", "oleg");
//if (person === "oleg") {
//    console.log("hello");
//} else if (person === "leksa") {
//    console.log("bye");
//} else {
//    console.log("haha");
//}



/*
1 ворона
2 -4 вороны
5 - 20 ворон
21 ворона
22- 24 вороны
*/

//let number = +prompt("Сколько ворон?");
//if (number%10===1 && ) {
//    console.log(`На ветке сидела ${number} ворона`);
//} else if ()  {
//    console.log(`На ветке сидели ${number} вороны`);
//}








