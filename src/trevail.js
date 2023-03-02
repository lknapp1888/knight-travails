import { Queue } from "./utility";

class Knight {
    constructor(currPos, prevMov = []) { 
        this.currPos = currPos; 
        this.moveList = this.setMoveList(this.currPos);
        this.prevMov = [...prevMov, this.currPos]
    }
    setMoveList(arr) { 
        let moves = []
        for (let i = 0; i < 8; i++) {
            let coord = [arr[0] + possMoves[i][0], arr[1] + possMoves[i][1]]
            if (coord[0] < 0 || coord[0] > 7 || coord[1] < 0 || coord[1] > 7) {
                continue;
            }

            moves.push(coord)
        }
        return moves;
     }
  }
  
  const possMoves = [[2,1],[1,2], [-1,2], [-2,1], [-1,-2],[-2,-1], [1,-2],[2,-1]]

   export const trevail = function (start, end) {
    let visited = {};
    let path = [];

    let startKnight = new Knight(start)
    visited[startKnight.currPos] = true;

    const q = new Queue;
    q.enqueue(startKnight)

    console.log(Object.keys(q.items).length)
    
    while (Object.keys(q.items).length > 0) {
        let nextNode = q.dequeue();
        if (nextNode.currPos[0] === end[0] && nextNode.currPos[1] === end[1]) {
            console.log(nextNode.prevMov)
            path = nextNode.prevMov;
            break;
        }
        // console.log(nextNode.prevMov)

        let moveList = nextNode.moveList;


        for (let i = 0; i < moveList.length; i++) {
            if (!visited[moveList[i]]) {
                let newNode = new Knight(moveList[i], nextNode.prevMov)
                visited[newNode.currPos] = true;
                q.enqueue(newNode);
            }
        }
   }
   return path;
   }