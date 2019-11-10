let pen = {
    size: 10,
    colors: {
        red: "#f00",
        green: "#0f0",
        blue: "#00f",
        paint: function() {
           return this.red = "#f70"
        }
    },
    brand: "Stabilo",
    draw: function() {
        this.colors.paint();
        return "Нарисована " + this.colors.red + " линия длиной " + this.size;
    }
};
console.log(pen.draw());

// let A = {
//     x: 10,
//     y: 20,
//     color: "red"
// };
//
// let B = {
//     x: 0,
//     y: 10,
//     color: "yellow"
// };
//
// let C = {
//     x: 15,
//     y: 7,
//     color: "aqua"
// };


class Point {
    constructor (xValue = 0, yValue = 0, colorValue = "black", size = 11, type = 0) {
        this.x = xValue;
        this.y = yValue;
        this.color = colorValue;
        this.size = size;
        this.type = type;

    }
    moveTo (newX, newY) {
        this.x = newX;
        this.y = newY;
    }
    reColor (newColor) {
        this.color = newColor;
    }
}

// let A = new Point(10, 20, "red");
// let B = new Point(0, 10, "yellow");
// let C = new Point();
//
// C.moveTo(15, 7);
// B.reColor("darkblue");
//
// console.log(A);
// console.log(B);
// console.log(C);
