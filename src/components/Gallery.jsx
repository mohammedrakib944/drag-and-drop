import React from "react";
import { useState, useRef } from "react";
import ImgIcon from "../assets/icons/ImgIcon";
import Image from "./Image";
import { useData } from "../context/ImageContext";
import DropIcon from "../assets/icons/DropIcon";

const Gallery = () => {
  const { data, updateData } = useData();
  const [onEnter, setOnEnter] = useState(-1);
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  const handleDragEnd = (e) => {
    e.preventDefault();
    // Make a shallow copy of elements
    let _elements = [...data];
    // store dragged value in separate variable
    let removedItem = _elements[dragItem.current];
    // remove dragged item from elements list
    _elements.splice(dragItem.current, 1);
    // Place dragged item to the dropped position
    _elements.splice(dragOverItem.current, 0, removedItem);

    dragItem.current = null;
    dragOverItem.current = null;

    setOnEnter(-1);
    updateData(_elements);
  };

  return (
    <div className="image-gallery grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-6">
      {data.map((item, index) => (
        <div
          key={item.id}
          className={`rounded-xl duration-200 relative ${
            index === 0 && "col-span-2 row-span-2"
          } }`}
          draggable
          onDragStart={() => (dragItem.current = index)}
          onDragOver={() => (dragOverItem.current = index)}
          onDragEnter={() => setOnEnter(index)}
          onDragEnd={handleDragEnd}
        >
          <Image item={item} />

          {/* Placeholder */}
          {index === onEnter && (
            <div className="absolute w-full h-full top-0 left-0 rounded-xl bg-gray-300 border border-dashed border-gray-500 z-50 flex items-center justify-center gap-2 font-semibold text-gray-400">
              <DropIcon />
              Drop
            </div>
          )}
        </div>
      ))}

      <div className="min-h-[170px] flex flex-col items-center justify-center gap-2 border border-dashed border-gray-300 bg-gray-50 rounded-xl cursor-pointer">
        <ImgIcon />
        <span className="text-sm font-semibold">Add Images</span>
      </div>
    </div>
  );
};

export default Gallery;
