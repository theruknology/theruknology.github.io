const boxes = document.querySelectorAll('.board-box');
const turnIndicator = document.querySelector('.turn-indicator');
const resultSpace = document.querySelector('.result-space');
const result = document.querySelector('.result');
const replay = document.querySelector('.replay-button');

const board = (() => {

    const winScen = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    let marker = 'X';

    const boardArray = [];
    for (let i = 0; i < 9; i++) {
        boardArray[i] = '';
    }

    const current = () => boardArray;
    const mark = (position) => {
        if (boardArray[position] == '') {
            boardArray[position] = marker;
            board.update();
            marker = marker == 'X' ? 'O':'X';

            turnIndicator.innerHTML = marker == 'X' ? `Player1's Turn - X`: `Player2's Turn - 0`;

        }
    }
    const checkWin = () => {
        let win = false;
        console.log('checking win')
        for (let w = 0; w < winScen.length; w++) {
            if (boardArray[winScen[w][0]] == boardArray[winScen[w][1]] && boardArray[winScen[w][1]] == boardArray[winScen[w][2]]) {
                if (boardArray[winScen[w][0]] == 'X' || boardArray[winScen[w][0]] == 'O') {
                    win = true;
                }
            }
        }
        return win;
    }
    const reset = () => {
        for (let i = 0; i < 9; i++) {
            boardArray[i] = '';
        }
        board.update();
        marker = 'X';
        turnIndicator.innerHTML = `Player1's Turn - X`;
    }
    const update = () => {
        for (let i = 0; i < 9; i++) {
           
            boxes[i].innerHTML = boardArray[i];

        } 
    }
    const boardFull = () => {
        let full = true;
        console.log('checking board full!');
        for (let z = 0; z < 9; z++) {
            if (boardArray[z] == '') {
                full = false;
            }
        } 
        return full;
    };

    return {current, mark, checkWin, reset, update, boardFull, marker};
    
})();

let gameOn = true;

for (let i = 0; i < boxes.length; i++) {
    
    boxes[i].addEventListener('click', () => {
        
        if (gameOn) {
            console.log(boxes[i].id);

            board.mark(i);

            if (board.checkWin()) {
                resultSpace.style.display = 'block';
                result.innerHTML = 'Game Over <br>'
                result.innerHTML += boxes[i].innerHTML == 'X' ? 'PLAYER 1 WINS THE GAME!' : 'PLAYER 2 WINS THE GAME!';
                console.log(board.marker);
                gameOn = false;
            } else if (board.boardFull()) {
                resultSpace.style.display = 'block';
                result.innerHTML = 'Game Over <br> Draw';
                gameOn = false;
            }

        }

    })
}

replay.addEventListener('click', () => {
    board.reset();
    gameOn = true;
    resultSpace.style.display = 'none';
})