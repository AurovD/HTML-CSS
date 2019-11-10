window.onload = function () {

    function getStar() {
        let star = "";
        let starCount = Math.floor(Math.random() * 5 + 1);
        console.log("CountSaars: ", starCount);
        for (let i = 1; i <= starCount; i++) {
            star += "★";
        }
        if (starCount !== 5) {
            let rest = 5 - starCount;
            for (let i = 1; i <= rest; i++) {
                star += "☆";
            }
        }
        return star;
    }


    let teamMembers = [{
        name: "Комаров Гамлет",
        localPath: "dreamteam/komarovgamle",
        email: "komarovgamle@dreamteam.ru",
        group: "fronend",
        tel: "+7(681)1970419",
        time: "8:00-22:00",
        stars: getStar()
    },
    {
        name: "Комаров Гамле",
        localPath: "dreamteam/komarovgamle",
        email: "komarovgamle@dreamteam.ru",
        group: "fronend",
        tel: "+7(681)1970419",
        time: "8:00-22:00",
        stars: getStar()
    },
    {
        name: "Комаров Гамл",
        localPath: "dreamteam/komarovgamle",
        email: "komarovgamle@dreamteam.ru",
        group: "fronend",
        tel: "+7(681)1970419",
        time: "8:00-22:00",
        stars: getStar()
    },
    {
        name: "Комаров Гам",
        localPath: "dreamteam/komarovgamle",
        email: "komarovgamle@dreamteam.ru",
        group: "fronend",
        tel: "+7(681)1970419",
        time: "8:00-22:00",
        stars: getStar()
    }
    ]


    let views = document.querySelector(".view");
    let table = document.querySelector(".table");
    let cards = document.querySelector(".cards-container");
    let groups = document.querySelector(".groups-container");


    for (let i = 0; i < views.children.length; i++) {
        let view = views.children[i];
        view.addEventListener("click", function () {
            this.classList.add("active");
            for (let j = 0; j < views.children.length; j++) {
                if (views.children[j].classList.contains("active") && views.children[j] !== this) {
                    views.children[j].classList.remove("active");
                }
                if (this.textContent === "Таблица") {
                    if (this.classList.contains("active")) {
                        if (!table.classList.contains("active"))
                            table.classList.add("active");
                        if (cards.classList.contains("active"))
                            cards.classList.remove("active");
                        if (groups.classList.contains("active"))
                            groups.classList.remove("active")
                    }
                                    } else if (this.textContent === "Карточки") {
                    if (this.classList.contains("active")) {
                        if (table.classList.contains("active"))
                            table.classList.remove("active");
                        if (!cards.classList.contains("active"))
                            cards.classList.add("active");
                        if (groups.classList.contains("active"))
                            groups.classList.remove("active")
                    }
                } else if (this.textContent === "Группы") {
                    if (this.classList.contains("active")) {
                        if (table.classList.contains("active"))
                            table.classList.remove("active");
                        if (cards.classList.contains("active"))
                            cards.classList.remove("active");
                        if (!groups.classList.contains("active"))
                            groups.classList.add("active")
                    }
                }
            }
        })
    }
}