let vaz = {
    wheelCount: 6,
    coutry: "Russia",
    year: 1978,
    hp: 64,
    steeringWheel: "left",
    color: "#abc",
    distance: 160003,
    getDistancePerYear: function(year) {
        return Math.round(this.distance / (year -this.year)); //this указание на ближайший родительский объект
    },
    getDistancePerDay: function(year) {
        
        return this.getDistancePerYear(year) / 365;
    }
};

vaz.color = "#a0a";

//function getDistancePerYear() {
////    let currentYear = 2019;
////    let age  = currentYear - vaz.year;
////    let distancePerYear = var.distance / age;
//    
//    
////    let distancePerYear = vaz.distance / 2019 -vaz.year;
////    return Math.round(distancePerYear);
//    
//    
//    return Math.round(vaz.distance / (2019 -vaz.year));
//}
//
//console.log(getDistancePerYear());

console.log(vaz.getDistancePerYear(1999));
console.log(vaz.getDistancePerDay(2017));


let usero = {
    name: "",
    getGreeting: function(name) {
        return "Привет, " + this.name;
    }
};

usero.name = "петя"; //prompt("Введи свое имя");
console.log(usero.getGreeting(usero.name));


let user = {
    name: "someone",
    say: function(phrase, name) {
      ;  if(name) {
            this.name = name;
        }
        return this.name + " says " + phrase;
    }
}

console.log(user.say("\"I am a bad developer\""));
console.log(user.say("\"I am a best developer\"", "Dima"));


//let rectangle = {
//    hs: 10,
//    vs: 15,
//    
//    s: function() {
//        
//    }
//    
//    p: function() {
//    
//    }
//
//    d: function() {
//        
//    }
//}


function validTriangle(a, b, c) {
    if ((a + b) >= c) {
        console.log("It's triangle");
    } else {
        console.log("It isn't triangle");
    }
}

validTriangle(100,94,1000);


function inverseLetter(word) {
    letter = word.charAt(index);
    return letter;
}
//function endLetter(word) {
//    index += (length - index);
//    letterEnd = word.charAt(index);
//    return letterEnd;
//}


function palindrom(word) {
    let length = word.length;
    let inversedLetter = "";
    for(index = length; index >= 0; index--) {
        let letter = word.charAt(index);
        inversedLetter += letter;
    }
    if (inversedLetter === word) {
        return word + "-это полиндром";
    } else {
        return word + "-это не полиндром";
    }
}


let arr = []; //massive упорядоченная пара ключ массив

let myArray = [1, 
               "Vasya", 
               true, 
               "no", 
               {wudth: 10, height: 20}
];

console.log(myArray.indexOf(true)); //=>2
console.log(myArray[6]);
myArray[100] = 45;
myArray[40] = "kjkh"
console.log(myArray[100]);
console.log(myArray.length);



for (let i = 0; i  < myArray.length; i++) {
    if (typeof myArray[i] === "string") {
        console.log(myArray[i]);
    }
}


let figures = [
    {width: 16, height: 15},
    {width: 15, height: 6},
    {width: 78, height: 98},
    {width: 30, height: 43},
    {width: 30, height: 20},
    {width: 80, height: 90},
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
        if (this.isSquare) {
            str += "Дан квадрат со стороной " + this.h + "\n";
        } else {
            str += "Дан прямоугольник " + this.h + "x" + this.w + ". ";
        }
        
        str += "P= " + this.P() + ". ";
        str += "S= " + this.S() + ". ";
        str += "D= " + this.D() + ". ";
        
        return str;
    }
    
}

for(let i = 0; i < figures.length; i++) {
    rect.w = figures[i].width;
    rect.h = figures[i].height;
    console.log(rect.getString());
}


console.log(palindrom("шорош"));




