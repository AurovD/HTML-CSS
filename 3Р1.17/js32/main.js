function getRandom(n) {
    return Math.floor(Math.random() * n);
}
function getCoordinates() {
    return getRandom(401);
}
function getRGB() {
    return `rgb(${getRandom(256)},${getRandom(256)},${getRandom(256)})`;
}
function getSize() {
    let size = getRandom(31);
    size = size % 2 ? size : size++;
    return size;
}
function getType() {
    return getRandom(2);
}
let vasya = document.body.firstElementChild;
function draw(e) {
    let A = new Point(getCoordinates(), getCoordinates(), getRGB(), getSize(), getType());
    let pointA = document.createElement("div");
    pointA.className = "point";
    pointA.style.left = e.clientX + "px";
    pointA.style.top = e.clientY + "px";
    pointA.style.background = A.color;
    pointA.style.width = A.size + "px";
    pointA.style.height = A.size + "px";
    pointA.style.position = "absolute";
    pointA.style.transform = `translate(-${(A.size - 1) / 2}px, -${(A.size - 1) / 2}px)`;
    if (A.type) {
        pointA.style.borderRadius = 0;
    }
    vasya.appendChild(pointA);
}
document.body.addEventListener("mousedown", function (event) {
    if (event.target === vasya) {
        vasya.addEventListener("mousemove", draw);
    }
    document.body.addEventListener("mouseup", function() {
        vasya.removeEventListener("mousemove", draw);
    })
});