class Point {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    moveTo(newX, newY) {
        this.x = newX;
        this.y = newY;
    }
    showReport() {
        return "2D точка с координатами x: " + this.x + ", y: " + this.y + ".";
    }
}

let A = new Point(4, 6);

console.log(A.showReport());


class Point3D extends Point {
    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }
    moveTo(newX, newY, newZ) {
        super.moveTo(newX, newY);
        this.z = newZ;
    }
    showReport() {
        return "3D точка с координатами x: " + this.x + ", y: " + this.y + ", z: " + this.z + ".";
    }
}

let B = new Point3D(3, 8, 5);
console.log(B.showReport());

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    show(){
       return "Дан прямоугольник "+ this.width + " * " + this.height;
    }
}
 let rect = new Rectangle(500, 300);

class Square extends Rectangle{
    constructor(side)  {
        super(side, side);

    }
    show(){
        return "Дан квадрат со стороной " + this.height;

    }

}

let sq = new Square(500);




console.log(rect.show());
console.log(sq.show());
