import { trevailObj } from "./trevail";

export const UI = {
  loadBoard: function () {
    let even = "white";
    let odd = "black";
    let startX = 0;
    let startY = 7;
    for (let i = 0; i < 64; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      if (i % 8 === 0 && i !== 0) {
        let evenOld = even;
        even = odd;
        odd = evenOld;
        startY--;
        startX = 0;
      }
      if (i % 2 === 0) {
        square.classList.add(even);
      }
      if (i % 2 !== 0) {
        square.classList.add(odd);
      }
      square.classList.add(`c${startX}${startY}`);
      startX++;
      uiStorage.board.appendChild(square);
    }
  },

  initSquareInnerHtml: function () {
    const squares = document.getElementsByClassName("square");
    for (let i = 0; i < squares.length; i++) {
        if (squares.item(i).classList[3] === 'start' || squares.item(i).classList[3] === 'target') {
            continue
        }
        const x = squares.item(i).classList[2][1]
        const y = squares.item(i).classList[2][2]
    squares.item(i).innerHTML = 
`     <div class="arrow upArr upArr${x}${y}"></div>
      <div class="arrow downArr downArr${x}${y}"></div>
      <div class="arrow leftArr leftArr${x}${y}"></div>
      <div class="arrow rightArr rightArr${x}${y}"></div>
      <div class="circle circle${x}${y}">
        <span>1</span>
      </div>`
    }
  },

  initSquareSelection: function () {
    const squares = document.getElementsByClassName("square");
    for (let i = 0; i < squares.length; i++) {
      squares.item(i).addEventListener("click", (e) => {
        if (UI.startCoord === null) {
          console.log(e.target.classList)
          const xCoord = parseInt(e.target.classList[2][1]);
          const yCoord = parseInt(e.target.classList[2][2]);
          UI.startCoord = [xCoord, yCoord];
          squares.item(i).classList.add("start");
          squares.item(i).innerHTML = "<p>S<p/>";
          uiStorage.userMessage.innerText = "Now select the target square";
          console.log(UI.startCoord);
          return;
        }
        if (UI.targetCoord === null) {
          const xCoord = parseInt(e.target.classList[2][1]);
          const yCoord = parseInt(e.target.classList[2][2]);
          UI.targetCoord = [xCoord, yCoord];
          squares.item(i).classList.add("target");
          squares.item(i).innerHTML = "<p>T<p/>";
          uiStorage.userMessage.innerText = "hit the trevail button";
          console.log(UI.targetCoord);
          UI.initSquareInnerHtml()
          return;
        }
      });
    }
  },

  initTrevailBtn: function () {
    uiStorage.trevailBtn.addEventListener("click", () => {
      if (UI.startCoord === null || UI.targetCoord === null) {
        return;
      }
      trevailObj.trevail(UI.startCoord, UI.targetCoord);
      UI.path = trevailObj.getFullPath();
      console.log(UI.path);
      for (let i = 1; i < UI.path.length - 1; i++) {
        const currX = UI.path[i][0]
        const currY = UI.path[i][1]
        const nextX = UI.path[i + 1][0]
        const nextY = UI.path[i + 1][1]
        if (i % 3 === 0) {
            const circle = document.querySelector(`.circle${currX}${currY}`)
            circle.classList.add('activeSquare')
            circle.innerHTML = `<span class="pathNum">${i / 3}</span>`
            continue
        }
        if (nextX - currX === 1) {
            const rightArr = document.querySelector(`.rightArr${currX}${currY}`)
            rightArr.classList.add('activeSquare')
            continue
        }
        if (nextX - currX === -1) {
            const leftArr = document.querySelector(`.leftArr${currX}${currY}`)
            leftArr.classList.add('activeSquare')
            continue
        }
        if (nextY - currY === 1) {
            const upArr = document.querySelector(`.upArr${currX}${currY}`)
            upArr.classList.add('activeSquare')
            continue
        }
        if (nextY - currY === -1) {
            const downArr = document.querySelector(`.downArr${currX}${currY}`)
            downArr.classList.add('activeSquare')
            continue
        } 
      }
      const target = document.querySelector('.target')
      target.innerHTML = `<p>${(UI.path.length - 1) / 3}<p/>`
      const userMessage = document.querySelector('.userMessage')
      userMessage.innerText = `You made it in ${(UI.path.length - 1) / 3} moves`
    });
  },

  startCoord: null,
  targetCoord: null,
  path: null,
};

const uiStorage = {
  board: document.querySelector(".board"),
  userMessage: document.querySelector(".userMessage"),
  trevailBtn: document.querySelector(".trevailBtn"),
};
