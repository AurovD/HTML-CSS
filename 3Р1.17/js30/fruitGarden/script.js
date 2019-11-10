window.onload = function() {
    let orangeTree = new OrangeTree();
    let appleTree = new AppleTree();
    let pearTree = new PearTree();

    while (!orangeTree.isMature()) {
        orangeTree.passGrowingSeason();
    }

    while (!appleTree.isMature()) {
        appleTree.passGrowingSeason();
    }

    while (!pearTree.isMature()) {
        pearTree.passGrowingSeason();
    }

    while (!orangeTree.isDead()) {
        orangeTree.passGrowingSeason();
        let harvestedFruits = [];
        let averageDiameter = 0;


        while (orangeTree.hasFruits()) {
            harvestedFruits.push(orangeTree.pickFruit());

        }

        for (let i = 0; i < harvestedFruits.length; i++) {
          averageDiameter +=  harvestedFruits[1].diameter;
        }

        averageDiameter = +(averageDiameter / harvestedFruits.length).toFixed(2);
        let reportBlock = document.createElement("div");
        reportBlock.className = "report";
        reportBlock.innerHTML = "<h2>Производство дерева возрастом " + orangeTree.age + " лет</h2> <ul><li>Высота:" + orangeTree.height + "</li><li>Количество плодов: " + harvestedFruits.length + "</li> <li>Средний диаметр плода: " + averageDiameter + " </li></ul>";

        document.body.appendChild(reportBlock);
        // console.log(averageDiameter);

    }
    while (!appleTree.isDead()) {
        appleTree.passGrowingSeason();
        let harvestedFruits = [];
        let averageDiameter = 0;


        while (appleTree.hasFruits()) {
            harvestedFruits.push(appleTree.pickFruit());

        }

        for (let i = 0; i < harvestedFruits.length; i++) {
          averageDiameter +=  harvestedFruits[1].diameter;
        }

        averageDiameter = +(averageDiameter / harvestedFruits.length).toFixed(2);
        let reportBlock = document.createElement("div");
        reportBlock.className = "report";
        reportBlock.innerHTML = "<h2>Производство дерева возрастом " + appleTree.age + " лет</h2> <ul><li>Высота:" + appleTree.height + "</li><li>Количество плодов: " + harvestedFruits.length + "</li> <li>Средний диаметр плода: " + averageDiameter + " </li></ul>";

        document.body.appendChild(reportBlock);
        // console.log(averageDiameter);

    }
    while (!pearTree.isDead()) {
        pearTree.passGrowingSeason();
        let harvestedFruits = [];
        let averageDiameter = 0;


        while (pearTree.hasFruits()) {
            harvestedFruits.push(pearTree.pickFruit());

        }

        for (let i = 0; i < harvestedFruits.length; i++) {
          averageDiameter +=  harvestedFruits[1].diameter;
        }

        averageDiameter = +(averageDiameter / harvestedFruits.length).toFixed(2);
        let reportBlock = document.createElement("div");
        reportBlock.className = "report";
        reportBlock.innerHTML = "<h2>Производство дерева возрастом " + pearTree.age + " лет</h2> <ul><li>Высота:" + pearTree.height + "</li><li>Количество плодов: " + harvestedFruits.length + "</li> <li>Средний диаметр плода: " + averageDiameter + " </li></ul>";

        document.body.appendChild(reportBlock);
        // console.log(averageDiameter);

    }
    

        // document.body.innerText +=
};
