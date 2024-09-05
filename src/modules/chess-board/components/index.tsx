import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useState } from "react";
import "../style/chessboard.css";
import { initialBoard } from "../utils/chessboard";
import ChessRow from "./ChessRow";

const Chessboard = () => {
  const [boardState, setBoardState] = useState(initialBoard);

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (over) {
      const activeId = (active.id as string).split("-");
      const overId = (over.id as string).split("-");

      const newBoardState = [...boardState];
      const piece = newBoardState[parseInt(activeId[0])][parseInt(activeId[1])];
      newBoardState[parseInt(activeId[0])][parseInt(activeId[1])] = null;
      newBoardState[parseInt(overId[0])][parseInt(overId[1])] = piece;
      setBoardState(newBoardState);
    }
  }

  const board = [];

  for (let row = 0; row < 8; row++) {
    board.push(<ChessRow key={row} row={row} boardState={boardState} />);
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="chessboard-wrapper">
        <div className="chessboard">{board}</div>
      </div>
    </DndContext>
  );
};

export default Chessboard;
