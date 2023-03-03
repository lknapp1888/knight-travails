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
            let coord = [arr[0] + trevailObj.possMoves[i][0], arr[1] + trevailObj.possMoves[i][1]]
            if (coord[0] < 0 || coord[0] > 7 || coord[1] < 0 || coord[1] > 7) {
                continue;
            }

            moves.push(coord)
        }
        return moves;
     }
  }
  
   export const trevailObj = {
    path: [],
    trevail: function (start, end) {
        let visited = {};
    
        let startKnight = new Knight(start)
        visited[startKnight.currPos] = true;
    
        const q = new Queue;
        q.enqueue(startKnight)
        
        while (Object.keys(q.items).length > 0) {
            let nextNode = q.dequeue();
            if (nextNode.currPos[0] === end[0] && nextNode.currPos[1] === end[1]) {
                trevailObj.path = nextNode.prevMov;
                break;
            }
    
            let moveList = nextNode.moveList;
    
            for (let i = 0; i < moveList.length; i++) {
                if (!visited[moveList[i]]) {
                    let newNode = new Knight(moveList[i], nextNode.prevMov)
                    visited[newNode.currPos] = true;
                    q.enqueue(newNode);
                }
            }
       }
       return trevailObj.path;
       },


        getFullPath: function () {
            let p = trevailObj.path;
            let fullPath = [p[0]];
            for (let i = 0; i < p.length - 1; i++) {
                let xDif = p[i+1][0] - p[i][0];
                let yDif = p[i+1][1] - p[i][1];
                if (xDif === 2) {
                    fullPath.push([p[i][0] + 1, p[i][1]])
                    fullPath.push([p[i][0] + 2, p[i][1]])
                }
                if (xDif === -2) {
                    fullPath.push([p[i][0] - 1, p[i][1]])
                    fullPath.push([p[i][0] - 2, p[i][1]])
                }
                if (yDif === 2) {
                    fullPath.push([p[i][0], p[i][1] + 1])
                    fullPath.push([p[i][0], p[i][1] + 2])
                }
                if (yDif === -2) {
                    fullPath.push([p[i][0], p[i][1] - 1])
                    fullPath.push([p[i][0], p[i][1] - 2])
                }
                fullPath.push(p[i+1]);

                }
            return fullPath;
        },

       possMoves: [[2,1],[1,2], [-1,2], [-2,1], [-1,-2],[-2,-1], [1,-2],[2,-1]],
   }
