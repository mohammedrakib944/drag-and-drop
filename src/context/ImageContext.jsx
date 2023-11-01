import { createContext, useContext, useState } from "react";
import { ImagesData } from "../data";

const ImageContext = createContext();

export const useData = () => useContext(ImageContext);

export const ContextProvider = ({ children }) => {
  const [data, setdata] = useState(ImagesData);
  function updateData(newData) {
    setdata(newData);
  }
  return (
    <ImageContext.Provider value={{ data, updateData }}>
      {children}
    </ImageContext.Provider>
  );
};

export default ImageContext;
