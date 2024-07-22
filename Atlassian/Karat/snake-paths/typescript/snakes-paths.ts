import { board1, board2, board3, board4, board5 } from "./data";
import { Board, PassableLanes } from "./types";




function findPassableLanes(board: Board): PassableLanes {
  const numRows = board.length;

  const passableLanes: PassableLanes = {
    rows: [],
    cols: [],
  };

  if (numRows === 0) {
    return passableLanes;
  }

  const numCols = board[0].length;

  // find PassableRows
  for (let i = 0; i < numRows; i++) {
    let pass = true;
    for (let j = 0; j < numCols; j++) {
      if (board[i][j] == '+') {
        pass = false;
        break;
      }
    }
    if (pass === true) {
      passableLanes.rows.push(i);
    }
  }

  // find passable cols
  for (let j = 0; j < numCols; j++) {
    let pass = true;
    for (let i = 0; i < numRows; i++) {
      if (board[i][j] === '+') {
        pass = false;
        break;
      }
    }

    if (pass === true) {
      passableLanes.cols.push(j);
    }
  }

  return passableLanes;
}

console.log(findPassableLanes(board1));
console.log(findPassableLanes(board2));
console.log(findPassableLanes(board3));
console.log(findPassableLanes(board4));
console.log(findPassableLanes(board5));
