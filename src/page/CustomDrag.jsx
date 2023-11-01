// src/DraggableElements.js
import React, { useState, useRef, useEffect } from "react";

const CustomDrag = () => {
  const [elements, setElements] = useState([
    { id: 1, content: "Element 1" },
    { id: 2, content: "Element 2" },
    { id: 3, content: "Element 3" },
    { id: 4, content: "Element 4" },
    { id: 5, content: "Element 5" },
    { id: 6, content: "Element 6" },
    { id: 7, content: "Element 7" },
    { id: 8, content: "Element 8" },
    { id: 9, content: "Element 9" },
  ]);

  const [onEnter, setOnEnter] = useState(-1);
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  const handleDragEnd = (e) => {
    e.preventDefault();
    // Make a shallow copy of elements
    let _elements = [...elements];
    // store dragged value in separate variable
    let removedItem = _elements[dragItem.current];
    // remove dragged item from elements list
    _elements.splice(dragItem.current, 1);
    // Place dragged item to the dropped position
    _elements.splice(dragOverItem.current, 0, removedItem);

    dragItem.current = null;
    dragOverItem.current = null;

    setOnEnter(-1);
    setElements(_elements);
  };

  return (
    <div className="max-w-[500px] mx-auto pt-10 grid grid-cols-3 gap-3">
      {elements.map((element, index) => (
        <div
          key={element.id}
          className={`bg-blue-600 p-4 border border-black text-white rounded-lg duration-200 ${
            index === 0 && "col-span-2 row-span-2"
          } ${index === onEnter && "bg-blue-900 border-dashed border-2"}}`}
          draggable
          onDragStart={() => (dragItem.current = index)}
          onDragOver={() => (dragOverItem.current = index)}
          onDragEnter={() => setOnEnter(index)}
          onDragEnd={handleDragEnd}
        >
          <p className="py-6">{element.content}</p>
        </div>
      ))}
    </div>
  );
};

export default CustomDrag;
