interface Square {
  row: number;
  col: number;
  isBlack: boolean;
  piece: string;
}

const ChessSquare = ({ row, col, isBlack, piece }: Square) => {
  return (
    <div
      key={`${row}-${col}`}
      className={`square ${isBlack ? "green-square" : "white-square"}`}
    >
      {piece && <span className={`piece`}>{piece}</span>}
    </div>
  );
};

export default ChessSquare;
