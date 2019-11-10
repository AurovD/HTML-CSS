let alive = true;
let age = 101;
if (age > 100) {
    let rand = Math.floor(Math.random() * 101);
    if (rand % 2 == 0) {
        alive = true;
        console.log(rand);
        console.log(alive);
    } else {
        alive = false
        console.log(rand);
        console.log(alive);
    }
}
