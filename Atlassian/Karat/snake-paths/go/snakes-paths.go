package main

import "fmt"

type Square byte

type Board [][]Square

type PassableLanes struct {
	rows []int
	cols []int
}

var board1 = Board{
	{'+', '+', '+', '0', '+', '0', '0'},
	{'0', '0', '+', '0', '0', '0', '0'},
	{'0', '0', '0', '0', '+', '0', '0'},
	{'+', '+', '+', '0', '0', '+', '0'},
	{'0', '0', '0', '0', '0', '0', '0'},
}

var board2 = Board{
	{'+', '+', '+', '0', '+', '0', '0'},
	{'0', '0', '0', '0', '0', '+', '0'},
	{'0', '0', '+', '0', '0', '0', '0'},
	{'0', '0', '0', '0', '+', '0', '0'},
	{'+', '+', '+', '0', '0', '0', '+'},
}

var board3 = Board{
	{'+', '+', '+', '0', '+', '0', '0'},
	{'0', '0', '0', '0', '0', '0', '0'},
	{'0', '0', '+', '+', '0', '+', '0'},
	{'0', '0', '0', '0', '+', '0', '0'},
	{'+', '+', '+', '0', '0', '0', '+'},
}

var board4 = Board{{'+'}}
var board5 = Board{{'0'}}

func (board Board) findPassableLanes() PassableLanes {
	numRows := len(board)

	var passableLanes = PassableLanes{
		rows: []int{},
		cols: []int{},
	}

	if numRows == 0 {
		return passableLanes
	}

	numCols := len(board[0])

	// find PassableRows
	for i := 0; i < numRows; i++ {
		pass := true
		for j := 0; j < numCols; j++ {
			if board[i][j] == '+' {
				pass = false
				break
			}
		}
		if pass == true {
			passableLanes.rows = append(passableLanes.rows, i)
		}
	}

	// find passable cols
	for j := 0; j < numCols; j++ {
		pass := true
		for i := 0; i < numRows; i++ {
			if board[i][j] == '+' {
				pass = false
				break
			}
		}

		if pass == true {
			passableLanes.cols = append(passableLanes.cols, j)
		}
	}

	return passableLanes
}

func main() {
	fmt.Printf("%+v\n", board1.findPassableLanes())
	fmt.Printf("%+v\n", board2.findPassableLanes())
	fmt.Printf("%+v\n", board3.findPassableLanes())
	fmt.Printf("%+v\n", board4.findPassableLanes())
	fmt.Printf("%+v\n", board5.findPassableLanes())
}
