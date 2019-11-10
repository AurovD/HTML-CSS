function toRome(n) {
    let numbersR = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    function zeroStep(n) {
        if (n <= 4) {
            for (let index = 1; index <= n; index++) {
                string += num["1"];
            }
        } else if (n === 5) {
            string += num["5"];
        } else if (n > 5 && n <= 9) {
            string += num["5"];
            let m = n - 5;
            for (let index = 1; index <= m; index++) {
                string += num["1"];
            }
        }
    }
    function tenStep() {
        let floor = Math.floor(n / 10);
        if (floor <= 4) {
            for (let index = 1; index <= floor; index++) {
                string += num["10"];
            }
        } else if (n === 5) {
            string += num["50"];
        } else if (floor > 5 && floor <= 9) {
            string += num["50"];
            let m = floor - 5;
            for (let index = 1; index <= m; index++) {
                string += num["10"];
            }
        }
    }
    function hundred() {
        let floor = Math.floor(n / 100);
        if (floor <= 4) {
            for (let index = 1; index <=floor; index++) {
                string += num["100"];
            }
        } else if (floor=== 5) {
            string += num["500"];
        } else if (floor > 5 && floor <= 9) {
            string += num["500"];
            let m = floor - 5;
            for (let index = 1; index <= m; index++) {
                string += num["100"];
            }
        }
    }
    function thousand() {
        let floor = Math.floor(n/1000);
        if(floor > 0){
            for(let index = 1; index<= floor; index++){
                string += num["1000"];
            }
        }
    }

    thousand();
    n%=1000;
    hundred();
    n%=100;
    tenStep();
    zeroStep(n%10);

    return string;
}


function getRomeNumbers(n, newType = false) {
    let numObj = {
        1: "I",
        5: "V",
        10: "X",
        50: "L",
        100: "C",
        500: "D",
        1000: "M"
    };
    let string = "";

    // if

    function step(num, bit) {
        if (bit !== 1000) {
            if (num <= 4 && newType == false) {
                for (let i = 0; i < num; i++) {
                    string += numObj[bit];
                }
            } else if (num === 4 && newType == true) {
                string += numObj[bit] + numObj[5 * bit]
            }else if (num === 5) {
                string += numObj[5 * bit];
            } else if (num <= 9 && newType == false) {
                string += numObj[5 * bit];
                let m = num - 5;
                for (let index = 0; index < m; index++) {
                    string += numObj[bit];
                }
            } else if (num === 9 && newType == true) {
                string += numObj[bit] + numObj[10 * bit]
            }
        } else {
            for (let i = 0; i < num; i++) {
                string += numObj[bit];
            }
        }
    }
    let bits = [1000, 100, 10, 1];
    for (let value of bits) {
        let floor = Math.floor(n / value);
        console.log(string, n, floor);
        if (floor) {
            step(floor, value);
            n %= value;
        }
    }
    return string;
}
console.log(getRomeNumbers(29, true));
