// InputContext.js
import React, { createContext, useState } from 'react';
// import bgcard from "../public"
import bgcard from "../public/imges/PNG/bg_edit3.png"


export const InputContext = createContext();

export const InputProvider = ({ children }) => {
  const [selectedImage, setSelectedImage] = useState(bgcard);
  const [stickers, setStickers] = useState([]);
  const [filter, setFilter] = useState('');
  const [inputData, setInputData] = useState('');
  const [fontStyle, setFontStyle] = useState('Arial');
  const [fontSizes, setFontSizes] = useState(16)
  const [textPosition, setTextPosition] = useState({ x: 0, y: 0 });
  const [stickerPositions, setStickerPositions] = useState({});
  const [textColor, setTextColor] = useState("#FFFFFF"); // Default color is white
  const [showMediapic, setShowMediapic] = useState(true);

  return (
    <InputContext.Provider value={{
      selectedImage, setSelectedImage,
      stickers, setStickers, 
      filter, setFilter, 
      inputData, setInputData, 
      fontStyle, setFontStyle, 
      fontSizes, setFontSizes, 
      textPosition, setTextPosition,
      stickerPositions, setStickerPositions,
      textColor, setTextColor,
      showMediapic, setShowMediapic
    }}>
      {children}
    </InputContext.Provider>
  );
};
