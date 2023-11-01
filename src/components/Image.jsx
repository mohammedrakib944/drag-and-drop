import { useState } from "react";
import { useData } from "../context/ImageContext";

const Image = ({ item: imageItem, featured }) => {
  const { data, updateData } = useData();
  const [isChecked, setIsChecked] = useState(false);

  const handleChecked = (e) => {
    setIsChecked(e.target.checked);
    const newData = data.map((item) => {
      if (item.src === imageItem.src) {
        item.checked = e.target.checked;
      }
      return item;
    });
    updateData(newData);
  };

  return (
    <div className="relative overflow-hidden group rounded-xl hover:shadow-lg">
      <div
        className={
          isChecked
            ? "absolute duration-75 w-full h-full px-6 py-4 bg-emerald-400/50 rounded-xl"
            : "-top-14 absolute group-hover:top-0 duration-100 px-6 py-4 bg-emerald-400/50 rounded-br-3xl rounded-tl-xl"
        }
      >
        <input onChange={handleChecked} type="checkbox" className="scale-150" />
      </div>
      <img
        className={
          isChecked
            ? "cursor-move border border-gray-300/40 rounded-xl"
            : "cursor-grab border border-gray-300/40 rounded-xl"
        }
        src={imageItem.src}
        alt="Product Image"
      />
    </div>
  );
};

export default Image;
