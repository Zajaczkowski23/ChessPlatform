import "../chess-board/style/chessboard.css";
import "./style/style.css";

const App = () => {
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
        <div
          key={`${row}-${col}`}
          className={`square ${isBlack ? "green-square" : "white-square"}`}
        >
          {piece && <span className={`piece`}>{piece}</span>}
        </div>
      );
    }

    board.push(
      <div key={`${row}`} className="row">
        {squares}
      </div>
    );
  }

  return (
    <div className="chessboard-wrapper">
      <div className="chessboard">{board}</div>;
    </div>
  );
};

export default App;
