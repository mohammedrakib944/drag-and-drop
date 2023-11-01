import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import React, { useState } from "react";

const Grid = ({ items, HandleOnDragEnd }) => {
  return (
    <DragDropContext onDragEnd={HandleOnDragEnd}>
      <Droppable droppableId="grid" direction="horizontal">
        {(provided) => (
          <div
            className="grid-container"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided) => (
                  <div
                    className="grid-item bg-white border p-5"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {item.content}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

const DragTest = () => {
  const [items, setItems] = useState([
    { id: "1", content: "Box 1" },
    { id: "2", content: "Box 2" },
    { id: "3", content: "Box 3" },
    { id: "4", content: "Box 4" },
    { id: "5", content: "Box 5" },
    { id: "6", content: "Box 6" },
    { id: "7", content: "Box 7" },
    { id: "8", content: "Box 8" },
    { id: "9", content: "Box 9" },
  ]);

  const HandleOnDragEnd = (result) => {
    if (!result.destination) return;
    const reorderedItems = [...items];
    const [reorderedItem] = reorderedItems.splice(result.source.index, 1);
    console.log(reorderedItem);
    reorderedItems.splice(result.destination.index, 0, reorderedItem);
    setItems(reorderedItems);
  };

  const handleDragUpdate = (result) => {};

  return (
    <div className="DragTest">
      <Grid
        items={items}
        HandleOnDragEnd={HandleOnDragEnd}
        handleDragUpdate={handleDragUpdate}
      />
    </div>
  );
};

export default DragTest;
