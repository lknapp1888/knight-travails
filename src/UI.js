import { trevailObj } from "./trevail";

export const UI = {
    loadBoard: function () {
        let even = 'white'
        let odd = 'black'
        let startX = 0;
        let startY = 7;
        for (let i = 0; i < 64; i++) {
            const square = document.createElement('div')
            square.classList.add('square')
            if ((i % 8 === 0 && i !== 0)) {
                let evenOld = even
                even = odd;
                odd = evenOld;
                startY--;
                startX = 0;
            }
            if (i % 2 === 0) {
                square.classList.add(even)
            }
            if (i % 2 !== 0) {
                square.classList.add(odd)
            }
            square.classList.add(`c${startX}${startY}`)
            startX++
            uiStorage.board.appendChild(square)
        }
    },

    initSquareSelection: function() {
        const squares = document.getElementsByClassName('square');
            for (let i = 0; i < squares.length; i++) {
                squares.item(i).addEventListener('click', (e)=> {
                    if (UI.startCoord === null) {
                        const xCoord = parseInt(e.path[0].classList[2][1]);
                        const yCoord = parseInt(e.path[0].classList[2][2]);
                        UI.startCoord = [xCoord, yCoord];
                        squares.item(i).classList.add('start')
                        squares.item(i).innerHTML = '<p>S<p/>'
                        uiStorage.userMessage.innerText = 'Now select the target square'
                        console.log(UI.startCoord)
                        return;
                    }
                    if (UI.targetCoord === null) {
                        const xCoord = parseInt(e.path[0].classList[2][1]);
                        const yCoord = parseInt(e.path[0].classList[2][2]);
                        UI.targetCoord = [xCoord, yCoord];
                        squares.item(i).classList.add('target')
                        squares.item(i).innerHTML = '<p>T<p/>'
                        uiStorage.userMessage.innerText = 'hit the trevail button'
                        console.log(UI.targetCoord)
                        return;
                    }
                })
            }
    },

    initTrevailBtn: function () {
        uiStorage.trevailBtn.addEventListener('click', () => {
            if (UI.startCoord === null || UI.targetCoord === null) {
                return;
            }
            trevailObj.trevail(UI.startCoord, UI.targetCoord);
            UI.path = trevailObj.getFullPath()
            console.log(UI.path)
            for (let i = 1; i < (UI.path.length) - 1; i++) {
                const pathSquare = document.querySelector(`.c${UI.path[i][0]}${UI.path[i][1]}`);
                pathSquare.classList.add('trevailed')
            }

            
        })
    },

    startCoord: null,
    targetCoord: null,
    path: null
}

const uiStorage = {
    board: document.querySelector('.board'),
    userMessage: document.querySelector('.userMessage'),
    trevailBtn: document.querySelector('.trevailBtn')
}