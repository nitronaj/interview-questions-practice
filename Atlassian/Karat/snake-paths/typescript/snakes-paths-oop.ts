import { board1, board2, board3, board4, board5 } from "./data";
import { Board, PassableLanes, Square } from "./types";

interface IBoard  {
	findPassableLanes(board: Board): PassableLanes
}

class SnakePaths implements IBoard {
  private board: Board;

  constructor(board: Board) {
    this.board = board;
  }

  findPassableRows(): number[] {
    const numRows = this.board.length;

    const passableRows: number[] = [];

    for (let i = 0; i < numRows; i++) {
      if (this.board[i].every((square: Square) => square === '0') === true) {
        passableRows.push(i);
      }
    }

    return passableRows;
  }

  findPassableCols(): number[] {
    const numCols = this.board[0].length;

    const passableCols: number[] = [];

    for (let j = 0; j < numCols; j++) {
      if (this.board.every((row: Square[]) => row[j] === '0') === true) {
        passableCols.push(j);
      }
    }

    return passableCols;
  }

  findPassableLanes(): PassableLanes {
    const numRows = this.board.length;

    const passableLanes: PassableLanes = {
      rows: [],
      cols: [],
    };

    if (numRows === 0) {
      return passableLanes;
    }

		passableLanes.rows = this.findPassableRows()
		passableLanes.cols = this.findPassableCols()

    return passableLanes;
  }
}



function main() {
	const snakePaths1 = new SnakePaths(board1);
	const snakePaths2 = new SnakePaths(board2);
	const snakePaths3 = new SnakePaths(board3);
	const snakePaths4 = new SnakePaths(board4);
	const snakePaths5 = new SnakePaths(board5);


	console.log(snakePaths1.findPassableLanes());
  console.log(snakePaths2.findPassableLanes());
  console.log(snakePaths3.findPassableLanes());
  console.log(snakePaths4.findPassableLanes());
  console.log(snakePaths5.findPassableLanes());
}



main();
