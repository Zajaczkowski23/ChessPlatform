import "../style/chessboard.css";
import ChessSquare from "./ChessSquare";

const Chessboard = () => {
  const initialBoard = [
    ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
    ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
    ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"],
  ];

  const board = [];

  for (let row = 0; row < 8; row++) {
    const squares = [];

    for (let col = 0; col < 8; col++) {
      const isBlack = (row + col) % 2 === 1;
      const piece = initialBoard[row][col];
      squares.push(
        <ChessSquare col={col} isBlack={isBlack} piece={piece} row={row} />
      );
    }

    board.push(
      <div key={row} className="row">
        {squares}
      </div>
    );
  }

  return (
    <div className="chessboard-wrapper">
      <div className="chessboard">{board}</div>
    </div>
  );
};

export default Chessboard;
