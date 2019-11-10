window.onload = function () {
    class OutBlock {
        constructor(width, height) {
            this.name = "outblock";
            this.width = width;
            this.height = height;
        }

        getCode(bigBlock, medBlock, smallBlock) {
            // let outB = document.createElement("div");
            // outB.className = outBlock.name;
            // getBigBlock();
            // return outB;
            let code = `<div class="${this.name}">
                            ${bigBlock}
                            ${medBlock}
                            ${smallBlock}
                        </div>`;

            return code;
        }
    }

    class BigBlock extends OutBlock {
        constructor(width, height) {
            super(width, height);
            this.name = "bigBlock";
        }

        getBigBlock() {
            // let bigB = document.createElement("div");
            // bigB.className = bigBlock.name;
            // outB.appendChild(bigB);
            // bigB.style.width = bigBlock.width + "px";
            // bigB.style.height = bigBlock.height + "px"; 
            // return bigB;

            let bigCode = ` <div class="${this.name}" style="width: ${this.width}px; height: ${this.height}px; border: 1px solid #000;">
                            </div>`;

            return bigCode;
        }
    }

    class Medium extends BigBlock {
        constructor(width, height) {
            super(width, height);
            this.name = "bigBlock";
            this.medName = "medBlock";
            this.innerWidth = 196;
            this.innerHeight = 100;
        }
        getMedBlock() {
            let medCode = ` <div class="${this.name}" style="width: ${this.width}px; height: ${this.height}px;">
                                <div class="${this.medName}" style="width: ${this.innerWidth}px; height: ${this.innerHeight}px; border: 1px solid #000;"></div>
                                <div class="${this.medName}" style="width: ${this.innerWidth}px; height: ${this.innerHeight}px; border: 1px solid #000;"></div>
                            </div>`;
            return medCode;
        }
    }


    class Small extends Medium {
        constructor(width, height) {
            super(width, height);
            this.name = "bigBlock";
            this.medName = "medBlock";
            this.innerWidth = 196;
            this.innerHeight = 100;
        }
        getSmallBlock() {
            let medCode = ` <div class="${this.name}" style="width: ${this.width}px; height: ${this.height}px;">
                                <div class="${this.medName}" style="width: ${this.innerWidth}px; height: ${this.innerHeight}px;"></div>
                                <div class="${this.medName}" style="width: ${this.innerWidth}px; height: ${this.innerHeight}px;"></div>
                            </div>`;
            return medCode;
        }
    }

    let outBlock = new OutBlock(400, 100);
    let bigBlock = new BigBlock(400, 100);
    let medBlock = new Medium(400, 100);
    let small = new Small(400, 100);

    let wrapper = document.createElement("div");
    wrapper.className = "wrapper";
    document.body.appendChild(wrapper);

    wrapper.innerHTML = outBlock.getCode(bigBlock.getBigBlock(), medBlock.getMedBlock());
    


    // let outB = document.createElement("div");
    // outB.className = outBlock.name;
    // wrapper.appendChild(outB);

    // let bigB = document.createElement("div");
    // bigB.className = bigBlock.name;
    // outB.appendChild(bigB);
    // bigB.style.width = bigBlock.width + "px";
    // bigB.style.height = bigBlock.height + "px"; 

}

