let body = document.body;
let wrapper = body.firstElementChild;
let nav = wrapper.firstElementChild.nextElementSibling;
// nav = document.body.firstElementChild.firstElementChild.nextElementSibling;

let count = Math.floor(Math.random() * 10 +1);

let ul = document.createElement("ul");
nav.appendChild(ul);

for (let i = 1; i <= count; i++) {
    let li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML =`<a href="https://www.google.ru/">${i}</a>`;
    let myCode = "";
}