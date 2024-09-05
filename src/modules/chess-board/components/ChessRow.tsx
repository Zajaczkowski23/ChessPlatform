import Droppable from "./Droppable";
import ChessSquare from "./ChessSquare";

const ChessRow = ({
  row,
  boardState,
}: {
  row: number;
  boardState: (string | null)[][];
}) => {
  const squares = [];
  for (let col = 0; col < 8; col++) {
    const isBlack = (row + col) % 2 === 1;
    const piece = boardState[row][col];
    const droppableId = `${row}-${col}`;

    squares.push(
      <Droppable key={droppableId} id={droppableId}>
        <ChessSquare col={col} isBlack={isBlack} piece={piece} row={row} />
      </Droppable>
    );
  }

  return (
    <div key={row} className="row">
      {squares}
    </div>
  );
};

export default ChessRow;
