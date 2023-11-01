import React, { useState, useEffect } from "react";
import CheckIcon from "../assets/icons/CheckIcon";
import DeleteIcon from "../assets/icons/DeleteIcon";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import { useData } from "../context/ImageContext";

const Home = () => {
  const { data, updateData } = useData();
  const [selected, setSelected] = useState(0);

  // count and set total selected items
  const totoalSelected = () => {
    let total = 0;
    data.forEach((item) => {
      if (item.checked) {
        total++;
      }
    });
    setSelected(total);
  };

  // handle delete items and set new data
  const handleDelete = () => {
    const newData = data.filter((item) => !item.checked);
    updateData(newData);
  };

  useEffect(() => {
    totoalSelected();
  }, [data]);

  return (
    <div className="max-w-[1024px] mx-auto pt-4 px-5">
      <Topbar />
      <div className="bg-white rounded-2xl mt-8">
        <div className="flex justify-between font-medium border-b px-6 py-4 text-gray-600">
          {selected ? (
            <div className="flex gap-2">
              <CheckIcon />
              {selected + " File Selected"}
            </div>
          ) : (
            "Image Gallery"
          )}

          {selected !== 0 && (
            <button
              onClick={handleDelete}
              className=" flex items-center text-white gap-1 px-2 py-[3px] rounded-full text-xs bg-red-600"
            >
              <DeleteIcon /> Delete Files
            </button>
          )}
        </div>
        <div>
          {/* Image Gallery Component */}
          <Gallery />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
