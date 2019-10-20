let figures = ['Ладья', 'Конь', 'Слон', 'Ферзь', 'Король', 'Слон', 'Конь', 'Ладья'];
let pawns = new Array(8).fill('Пешка');
// console.log(pawns);

const emojis = {
    'Б Ферзь': '♕',
    'Б Король': '♔',
    'Б Слон': '♗',
    'Б Конь': '♘',
    'Б Ладья': '♖',
    'Б Пешка': '♙',
    'Ч Ферзь': '♛',
    'Ч Король': '♚',
    'Ч Слон': '♝',
    'Ч Конь': '♞',
    'Ч Ладья': '♜',
    'Ч Пешка': '♟'
};

function generateChessboard() {
    let n = 8;
    let board = [];
    for (let i = 0; i < n; i++ ){
        let row = [];
        for (let j = 0; j < n; j++){
            let str = "";
            if (i < 2) {
                str += "Ч";
            } else if (i > 5) {
                str += "Б";
            }
            if (i === 0 || i === 7) {
                str += " " + figures[j];
            }
            if (i === 1 || i === 6) {
                str += " " + pawns[j];
            }
            row.push(str);
        }
        board.push(row);
    }
    return board;
}
let board = generateChessboard();

function renderChessboard(board) {
    let n = 8;
    let result = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (emojis[board[i][j]]) {
                result += emojis[board[i][j]];
            } else {
                result += " ";
            }
        }
        result += "\n";
    }
    return result;
}


console.log(renderChessboard(board));
