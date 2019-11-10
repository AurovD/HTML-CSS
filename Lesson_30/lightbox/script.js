// let images = document.getElementsByClassName("images")[0];
// let images = document.querySelectorAll(".images")[0];
let images = document.querySelector(".images");
let lb = document.querySelector(".lightbox");


for (let i = 0, cnt = images.children.length; i < cnt; i++) {
    let item = images.children[i];
    item.addEventListener("click", function () {
        document.body.classList.add("active");
        let img = document.createElement("img");
        // console.log(item.getAttribute("data-src"));
        img.src = item .getAttribute("data-src");
        lb.innerHTML = img.outerHTML;
    });
}
document.body.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        if (document.body.classList.contains("active")) {
            document.body.classList.remove("active");
        } else {
            console.log("Обрабодчик отключен")
        }

    }
});