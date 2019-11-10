// Цель: найти все секции и раскрасить их разными цветами

let a = document.getElementsByTagName("section");
console.log(a.length);

function getRandom(n) {
    return Math.floor(Math.random() * n);
}

// `1+2=${1+2}`;

function getRGB() {
    return `rgb(${getRandom(256)},${getRandom(256)},${getRandom(256)})`;
}

console.log(a);
for (let i = 0; i < a.length; i = i + 1) {
    let section = a[i];
    section.id = i;
    // section.style.backgroundColor = "red";
    section.style.backgroundColor = getRGB();
}
// let update = confirm("Обновить страницу?");
// if (update) {
//     location.reload();
// }

document.getElementById("logo").style.background = getRGB();
document.getElementById("logo").style.boxShadow = "20px 15px " + getRGB();
