import { useDroppable } from "@dnd-kit/core";

const Droppable = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  const style = {
    backgroundColor: isOver ? "lightgreen" : undefined,
  };

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
};

export default Droppable;
