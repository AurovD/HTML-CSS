//let cook ="";
//cook += "Включить плиту.";
//cook += "Ставим скоовородку на плиту.";
//cook += "Берем два яйца.";
//cook += "Разбиваем яйца в сковородку.";
//cook += "Соль, перец по вкусу.";
//cook += "Ждать пять минут.\n";
//cook += "Яичница из двух яиц готова."
//console.log(cook);

//функция
function cookEggs(eggsCount = 2, 
                  backon = false, 
                  sousegers = false) { //2 значение по умолчанию
    let cook ="";
    cook += "Включить плиту. ";
    cook += "Ставим скоовородку на плиту. ";
    cook += "Берем " + eggsCount + " яйца. ";
    cook += "Разбиваем яйца в сковородку. ";
    if (backon === true) {
        cook += "Добавить бекон, ";     
    }
        if (backon === true) {
        cook += "сосисок. ";     
    }
    cook += "Соль, перец по вкусу. ";
    cook += "Ждать пять минут.\n";
    cook += "Яичница из " + eggsCount + " яиц ";
        if (backon && sousegers) {
            cook += "с беконом и сосисочками ";     
        } else if (sousegers) {
            cook += "с сосисочками ";     
        } else if (backon) {
            cook += " с беконом ";         
        }
    cook += "готова!"
    //console.log(cook);
    return cook;
}


/* let hungeryMen = 4;
while(hungeryMen) {
    cookEggs();
    hungeryMen--;
}
*/

//аргумент


let result1 = cookEggs(2);
let result2 = cookEggs(5, true, true);
cookEggs(true); //true беконов ! не правильно
cookEggs();


console.log(cookEggs());
console.log(result1, result2);











