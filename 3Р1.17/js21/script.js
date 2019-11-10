let nav = document.body.firstElementChild.firstElementChild.nextElementSibling;
console.log(nav);
let menu = document.createElement("ul");
nav.appendChild(menu);
let n = Math.floor(Math.random() * 7 + 3);
console.log(n);
for (let i = 0; i < n; i++) {
    let list = document.createElement("li");
    let link = document.createElement("a");
    link.textContent = "link" + (i + 1);
    list.appendChild(link);
    menu.appendChild(list);
}
