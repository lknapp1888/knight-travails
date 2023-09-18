import { Queue } from "./utility";

class Knight {
    constructor(currPos, prevMov = []) { 
        this.currPos = currPos; 
        this.moveList = this.setMoveList(this.currPos);
        this.prevMov = [...prevMov, this.currPos]
    }
    
    //set move list calculates the possible coordinates the knight can move to from its given starting position
    setMoveList(arr) { 
        let moves = []
        
        // loop 8 times as there are a maximum of 8 moves a knight can make
        for (let i = 0; i < 8; i++) {
            let coord = [arr[0] + trevailObj.possMoves[i][0], arr[1] + trevailObj.possMoves[i][1]]

            /*Any coordinate on the x or y axis less than 0 or greater than 7 would be off the board and therefore
            should not be pushed to the moves array*/

            if (coord[0] < 0 || coord[0] > 7 || coord[1] < 0 || coord[1] > 7) {
                continue;
            }

            moves.push(coord)
        }
        return moves;
     }
  }
  
   export const trevailObj = {
    // the path array lists the coordinates a knight has taken
    path: [],
    trevail: function (start, end) {
        // visited keeps track of the previous squares visited on the grid
        let visited = {};
        
        // Begin with calling the Knight constructor to create a start knight and add its starting coordinate to the visited object
        let startKnight = new Knight(start)
        visited[startKnight.currPos] = true;
        
        //Add the starting knight to a queue using the Queue constructor
        const q = new Queue;
        q.enqueue(startKnight)
        
        /* While there is a knight at the end of the queue, we check to see if its current coords match the target coords, if it does then when save its path to the path array and have our shortest path,
        if it does not match then we create knights for each of the dequeued knights potential target coords, add them to the queue, and repeat the loop until we have a 'match' with the target coords*/
        while (Object.keys(q.items).length > 0) {
            let nextNode = q.dequeue();
            if (nextNode.currPos[0] === end[0] && nextNode.currPos[1] === end[1]) {
                trevailObj.path = nextNode.prevMov;
                break;
            }
    
            let moveList = nextNode.moveList;
    
            for (let i = 0; i < moveList.length; i++) {
                // If a coord has been visited we do not create a new Knight and add it to the queue
                if (!visited[moveList[i]]) {
                    let newNode = new Knight(moveList[i], nextNode.prevMov)
                    visited[newNode.currPos] = true;
                    q.enqueue(newNode);
                }
            }
       }
       return trevailObj.path;
       },

        /* Full path provides every single square a knight traverses rather than the coordinate move list as in the 'path' array.
        This is needed for the UI path painting*/
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
