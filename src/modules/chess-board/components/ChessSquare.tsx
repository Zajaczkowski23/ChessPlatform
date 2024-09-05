import { useDraggable } from "@dnd-kit/core";
import { Square } from "../types";

const ChessSquare: React.FC<Square> = ({
  row,
  col,
  isBlack,
  piece,
  children,
}) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: `${row}-${col}`,
    disabled: !piece,
  });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    backgroundColor: isBlack ? "green" : "white",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`square ${isBlack ? "green-square" : "white-square"}`}
    >
      {piece && <span className="piece">{piece}</span>}
      {children}
    </div>
  );
};

export default ChessSquare;
