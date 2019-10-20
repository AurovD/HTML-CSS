window.onload = function() {
    let board = document.createElement("div");
    board.className = "board";
    document.body.appendChild(board);

    // board.appendChild();
    // .row*8>.square*8

    let n = 8;

    for (let i = 0; i < n; i++) {
        let row = document.createElement("div");
        row.className = "row";
        board.appendChild(row);
        if (i % 2 === 0) {


            for (let j = 0; j < n; j++) {
                let sq = document.createElement("div");
                sq.className = "square";
                if (j % 2 === 0) {
                    sq.className += " whiteSquare";
                } else {
                    sq.className += " blackSquare";
                }
                row.appendChild(sq);
            }
        } else {


            for (let j = 0; j < n; j++) {
                let sq = document.createElement("div");
                sq.className = "square";
                if (j % 2 === 0) {
                    sq.className += " blackSquare";
                } else {
                    sq.className += " whiteSquare";
                }
                row.appendChild(sq);
            }

        }
    }
};
