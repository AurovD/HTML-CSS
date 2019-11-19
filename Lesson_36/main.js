let button = document.querySelector(".button");
let ul = document.querySelector(".ul");

button.addEventListener("click", function(){
    ul.classList.toggle("active");
});